<template>
  <div class="chart-row">
    <BottleneckDetails :data="moreInfo" class="details" />
    <div class="chart" />
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { bottleneckStore } from "@/stores/bottleneckStore";
import { onMounted, ref, watch } from "vue";
import tagLabels from "@/util/tagLabels.json";
import BottleneckDetails from "@/components/BottleneckDetails.vue";

const store = bottleneckStore();
const analysis = store.analysis;
const chart = ref({});

const props = defineProps({
  chartData: {
    data: Object,
    props: Object,
  },
});

const moreInfo = ref({
  title: "",
  description: "",
  items: [],
  isBottleneck: false,
});

const clickNode = ref("");

watch(
  () => props.chartData,
  function () {
    chart.value.update(props.chartData.data);
    chart.value.clickFunction(clickNode.value);
  }
);

onMounted(function () {
  chart.value = draw(props.chartData.data, props.chartData.props);
  document.getElementsByClassName("chart")[0].append(chart.value.node());
});

const draw = function (
  data,
  {
    children, // if hierarchical data, given a d in data, returns its children
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    clickData, // given a node d, returns the data that should be shown when that node is clicked on
    sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
    label, // given a leaf node d, returns the display name
    title, // given a node d, returns its hover text
    chartTitle, // the title of the chart
    width = 1000, // outer width, in pixels
    height = 530, // outer height, in pixels
    margin = 0, // shorthand for margins
    marginTop = 130, // top margin, in pixels
    marginRight = 50, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = 375, // left margin, in pixels
    padding = 0, // separation between circles
    fill, // fill for leaf circles
    duration = 750, // transition duration
    barStep = 50,
    barPadding = 3 / barStep,
    color = d3.scaleOrdinal([true, false], ["steelblue", "#aaa"]),
  } = {}
) {
  console.log(height);
  const root = d3.hierarchy(data);
  // Compute the values of internal nodes by aggregating from the leaves.
  value == null
    ? root.count()
    : root
        .sum((d) => Math.max(0, value(d)))
        .sort((a, b) => b.value - a.value)
        .eachAfter(
          (d) =>
            (d.index = d.parent
              ? (d.parent.index = d.parent.index + 1 || 0)
              : 0)
        );

  height = (() => {
    return root.children.length * barStep + marginTop + marginBottom;
  })();

  const svg = d3
    .create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto;");

  const x = d3.scaleLinear().range([marginLeft, width - marginRight]);

  x.domain([0, root.value]);

  svg
    .append("rect")
    .attr("class", "background")
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("cursor", "pointer")
    .on("click", (event, d) => {
      clickNode.value = "";
      moreInfo.value = null;
      up(svg, d);
    });

  const xAxis = (g) =>
    g
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${marginTop})`)
      .call(d3.axisTop(x).ticks(width / 80))
      .call((g) =>
        (g.selection ? g.selection() : g).select(".domain").remove()
      );

  const yAxis = (g) =>
    g
      .attr("class", "y-axis")
      .attr("transform", `translate(${marginLeft + 0.5},0)`)
      .call((g) =>
        g
          .append("line")
          .attr("stroke", "currentColor")
          .attr("y1", marginTop)
          .attr("y2", height - marginBottom)
      );

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

  // Add title to chart. Do this last so it draws over the rest of the chart
  svg
    .append("text")
    .attr("pointer-events", "none")
    .attr("x", width / 2)
    .attr("y", height / 12)
    .attr("text-anchor", "middle")
    .attr("class", "title")
    .style("font-size", "3em")
    .text(chartTitle);

  // Creates a set of bars for the given data node, at the specified index.
  function bar(svg, down, d, selector) {
    const g = svg
      .insert("g", selector)
      .attr("class", "enter")
      .attr("transform", `translate(0,${marginTop + barStep * barPadding})`)
      .attr("text-anchor", "end")
      .style("font", "10px sans-serif")
      .datum(d);

    const bar = g
      .selectAll("g")
      .data(d.children, (d) => d.data.name)
      .join("g")
      .attr("cursor", "pointer")
      .attr("class", "bar")
      .on("click", (event, d) => {
        if (d.children) {
          moreInfo.value = clickData(d);
          down(svg, d);
        } else {
          moreInfo.value = clickData(d);
        }
        clickNode.value = d.data.name;
      });

    bar
      .append("text")
      .attr("x", marginLeft - 6)
      .attr("y", (barStep * (1 - barPadding)) / 2)
      .attr("dy", ".35em")
      .attr("font-size", "1rem")
      .attr("class", "label")
      .text((d) => title(d.data, d).split(":")[0]);

    bar
      .append("rect")
      .attr("x", x(0))
      .attr("width", (d) => x(d.value) - x(0))
      .attr("height", barStep * (1 - barPadding));

    bar.append("title").text((d) => title(d.data, d));

    return g;
  }

  function down(svg, d) {
    if (!d.children || d3.active(svg.node())) return;

    // Rebind the current node to the background.
    svg.select(".background").datum(d);

    // Define two sequenced transitions.
    const transition1 = svg.transition().duration(duration);
    const transition2 = transition1.transition();

    // Mark any currently-displayed bars as exiting.
    const exit = svg.selectAll(".enter").attr("class", "exit");

    // Entering nodes immediately obscure the clicked-on bar, so hide it.
    exit.selectAll("rect").attr("fill-opacity", (p) => (p === d ? 0 : null));

    // Transition exiting bars to fade out.
    exit.transition(transition1).attr("fill-opacity", 0).remove();

    // Enter the new bars for the clicked-on data.
    // Per above, entering bars are immediately visible.
    const enter = bar(svg, down, d, ".y-axis").attr("fill-opacity", 0);

    // Have the text fade-in, even though the bars are visible.
    enter.transition(transition1).attr("fill-opacity", 1);

    // Transition entering bars to their new y-position.
    enter
      .selectAll("g")
      .attr("transform", stack(d.index))
      .transition(transition1)
      .attr("transform", stagger());

    // Update the x-scale domain.
    x.domain([0, d3.max(d.children, (d) => d.value)]);

    // Update the x-axis.
    svg.selectAll(".x-axis").transition(transition2).call(xAxis);

    // Transition entering bars to the new x-scale.
    enter
      .selectAll("g")
      .transition(transition2)
      .attr("transform", (d, i) => `translate(0,${barStep * i})`);

    // Color the bars as parents; they will fade to children if appropriate.
    enter
      .selectAll("rect")
      .attr("fill", (d) => fill(d.data) || "#eee")
      .attr("fill-opacity", 1)
      .transition(transition2)
      //      .attr("fill", (d) => color(true))
      .attr("width", (d) => x(d.value) - x(0));

    const newHeight = d.children.length * barStep + marginTop;

    // transition the y-axis height
    svg
      .select(".y-axis")
      .select("line")
      .transition(transition1)
      .attr("y2", newHeight);

    svg
      .transition(transition1)
      .attr("height", newHeight)
      .attr("viewBox", [0, 0, width, newHeight]);
  }

  function up(svg, d) {
    if (!d.parent || !svg.selectAll(".exit").empty()) return;

    // Rebind the current node to the background.
    svg.select(".background").datum(d.parent);

    // Define two sequenced transitions.
    const transition1 = svg.transition().duration(duration);
    const transition2 = transition1.transition();

    // Mark any currently-displayed bars as exiting.
    const exit = svg.selectAll(".enter").attr("class", "exit");

    // Update the x-scale domain.
    x.domain([0, d3.max(d.parent.children, (d) => d.value)]);

    // Update the x-axis.
    svg.selectAll(".x-axis").transition(transition1).call(xAxis);

    // Transition exiting bars to the new x-scale.
    exit.selectAll("g").transition(transition1).attr("transform", stagger());

    // Transition exiting bars to the parent’s position.
    exit
      .selectAll("g")
      .transition(transition2)
      .attr("transform", stack(d.index));

    // Transition exiting rects to the new scale and fade to parent color.
    exit
      .selectAll("rect")
      .transition(transition1)
      .attr("width", (d) => x(d.value) - x(0))
      .attr("fill", (d) => fill(d.data) || "#eee");

    // Transition exiting text to fade out.
    // Remove exiting nodes.
    exit.transition(transition2).attr("fill-opacity", 0).remove();

    // Enter the new bars for the clicked-on data's parent.
    const enter = bar(svg, down, d.parent, ".exit").attr("fill-opacity", 0);

    enter
      .selectAll("g")
      .attr("transform", (d, i) => `translate(0,${barStep * i})`);

    // Transition entering bars to fade in over the full duration.
    enter.transition(transition2).attr("fill-opacity", 1);

    const newHeight = d.parent.children.length * barStep + marginTop;

    svg
      .select(".y-axis")
      .select("line")
      .transition(transition1)
      .attr("y2", newHeight);

    svg
      .transition(transition1)
      .attr("height", newHeight)
      .attr("viewBox", [0, 0, width, newHeight]);

    // Color the bars as appropriate.
    // Exiting nodes will obscure the parent bar, so hide it.
    // Transition entering rects to the new x-scale.
    // When the entering parent rect is done, make it visible!
    enter
      .selectAll("rect")
      .attr("fill", (d) => fill(d.data) || "#eee")
      .attr("fill-opacity", (p) => (p === d ? 0 : null))
      .transition(transition2)
      .attr("width", (d) => x(d.value) - x(0))
      .on("end", function (p) {
        d3.select(this).attr("fill-opacity", 1);
      });
  }

  function stack(i) {
    let value = 0;
    return (d) => {
      const t = `translate(${x(value) - x(0)},${barStep * i})`;
      value += d.value;
      return t;
    };
  }

  function stagger() {
    let value = 0;
    return (d, i) => {
      const t = `translate(${x(value) - x(0)},${barStep * i})`;
      value += d.value;
      return t;
    };
  }

  function sort() {
    let value = 0;
    return (d, i) => {
      const t = `translate(0,${barStep * i})`;
      value += d.value;
      return t;
    };
  }

  function updateBar(newData) {
    const newRoot = d3
      .hierarchy(newData)
      .sum((d) => Math.max(0, value(d)))
      .sort((a, b) => b.value - a.value)
      .eachAfter(
        (d) =>
          (d.index = d.parent ? (d.parent.index = d.parent.index + 1 || 0) : 0)
      );

    const leaves = newRoot.descendants().filter((d) => !d.children);
    const parents = newRoot.descendants().filter((d) => d.data.tag);

    const oldNode = svg
      .selectAll(".enter")
      .data(newRoot.descendants(), (d) => d.data.name)
      .data()[0];

    // Update the existing bars with new data
    const bars = svg
      .selectAll(".bar")
      .data(oldNode.children, (d) => d.data.name);

    // // EXIT phase
    // bars.exit()
    //     .transition()
    //     .duration(duration)
    //     .attr("fill-opacity", 0)
    //     .remove();
    //
    // // ENTER phase
    // const enterBars = bar(svg, down, newRoot, ".y-axis")
    //     .attr("fill-opacity", 0);
    //
    // // Have the text fade-in, even though the bars are visible.
    // enterBars.transition().duration(duration)
    //     .attr("fill-opacity", 1);

    // Update the x-scale domain.
    x.domain([
      0,
      d3.max(oldNode.children, (d) => {
        return d.value;
      }),
    ]);

    // UPDATE phase
    const updateBars = bars.transition().duration(duration);

    updateBars.select("rect").attr("width", (d) => x(d.value) - x(0));

    updateBars.select("text").text((d) => title(d.data, d).split(":")[0]);

    // Update the x-axis.
    svg.select(".x-axis").transition().duration(duration).call(xAxis);

    // Transition entering bars to their new y-position.
    updateBars.attr("transform", sort());

    const newHeight = oldNode.children.length * barStep + marginTop;

    svg
      .select(".y-axis")
      .select("line")
      .transition()
      .duration(duration)
      .attr("y2", newHeight);

    svg.attr("height", newHeight).attr("viewBox", [0, 0, width, newHeight]);
  }

  // need to expose click function so that we can use it on our last-clicked node when filters are updated
  svg.clickFunction = (clickNodeName) => {
    if (!clickNodeName) {
      moreInfo.value = null;
      return;
    }

    const clickNode = svg
      .selectAll(".enter,.bar")
      .filter((d) => d.data.name === clickNodeName)
      .data();

    moreInfo.value = clickNode ? clickData(clickNode[0]) : null;
  };

  // Update function to update the hierarchy with new data
  svg.update = (newData) => updateBar(newData);

  down(svg, root);

  return svg;
};
</script>

<style scoped>
.chart-row {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 100%;
}

@media (prefers-color-scheme: dark) {
  :deep(.title) {
    fill: var(--vt-c-text-dark-1) !important;
  }

  :deep(.label, .y-axis) {
    fill: var(--vt-c-text-dark-2) !important;
  }
}

@media screen and (min-width: 768px) {
  .chart-row {
    flex-direction: row;
    justify-content: center;
    .details {
      position: absolute;
      left: 0;
      max-width: 25%;
    }

    .chart {
      max-width: 50%;
    }
  }
}
</style>
