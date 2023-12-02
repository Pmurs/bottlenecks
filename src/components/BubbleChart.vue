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
  chart.value = Pack(props.chartData.data, props.chartData.props);
  document.getElementsByClassName("chart")[0].append(chart.value.node());
});

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/pack
function Pack(
  data,
  {
    children, // if hierarchical data, given a d in data, returns its children
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    clickData, // given a node d, returns the data that should be shown when that node is clicked on
    sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
    label, // given a leaf node d, returns the display name
    title, // given a node d, returns its hover text
    link, // given a node d, its link (if any)
    linkTarget = "_blank", // the target attribute for links, if any
    chartTitle, // the title of the chart
    width = 1000, // outer width, in pixels
    height = 1000, // outer height, in pixels
    margin = 0, // shorthand for margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    padding = 0, // separation between circles
    fill, // fill for leaf circles
    fillOpacity, // fill opacity for leaf circles
    stroke = "#bbb", // stroke for internal circles
    strokeWidth, // stroke width for internal circles
    strokeOpacity, // stroke opacity for internal circles
  } = {}
) {
  // We assume that the data is
  // specified as an object {children} with nested objects (a.k.a. the “flare.json”
  // format), and use d3.hierarchy.
  const root = d3.hierarchy(data, children);

  // Compute the values of internal nodes by aggregating from the leaves.
  value == null ? root.count() : root.sum((d) => Math.max(0, value(d)));

  // Compute labels and titles.
  const descendants = root.descendants();
  const leaves = descendants.filter((d) => !d.children);
  const parents = descendants.filter((d) => d.children && d.data.tag);
  parents.forEach((d, i) => (d.index = i));
  leaves.forEach((d, i) => (d.index = i));
  const L = label == null ? null : leaves.map((d) => label(d.data, d));
  const T = title == null ? null : descendants.map((d) => title(d.data, d));

  // Sort the leaves (typically by descending value for a pleasing layout).
  if (sort != null) root.sort(sort);

  // Compute the layout.
  d3
    .pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(root);

  const svg = d3
    .create("svg")
    .attr("viewBox", [-marginLeft, -marginTop, width, height])
    .attr("width", width)
    .attr("height", height)
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1em")
    .attr("text-anchor", "middle");

  const node = svg
    .selectAll("a")
    .data(descendants, (d) => d.data.name)
    .join("a")
    .attr("xlink:href", link == null ? null : (d, i) => link(d.data, d))
    .attr("target", link == null ? null : linkTarget);

  node
    .append("circle")
    .attr("fill", (d) => fill(d.data) || "#eee")
    .attr("fill-opacity", (d) => (d.children ? null : fillOpacity))
    .attr("stroke", (d) => (d.children ? stroke : null))
    .attr("stroke-width", (d) => (d.children ? strokeWidth : null))
    .attr("stroke-opacity", (d) => (d.children ? strokeOpacity : null))
    .attr("r", (d) => {
      return d.r;
    })
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    .on("mouseover", function (event, d) {
      if (!d.children) {
        d3.select(this).attr("stroke", "#000");
        d3.select(this).style("cursor", "pointer");
      }
    })
    .on("mouseout", function () {
      d3.select(this).attr("stroke", null);
    })
    .on("click", (event, d) => {
      if (!d.children) {
        moreInfo.value = clickData(d.data);
      }
      clickNode.value = d.data.name;
    });

  // need to expose click function so that we can use it on our last-clicked node when filters are updated
  svg.clickFunction = (clickNodeName) => {
    if (!clickNodeName) {
      return;
    }
    const clickNode = node.filter((d) => d.data.name === clickNodeName);
    moreInfo.value = clickData(clickNode["_groups"][0][0].__data__.data);
  };

  // A unique identifier for clip paths (to avoid conflicts).
  const uid = `O-${Math.random().toString(16).slice(2)}`;

  // Create Labels for Circles
  node
    .filter((d) => !d.children && d.r > 10 && L[d.index] != null)
    .append("text")
    .attr(
      "clip-path",
      (d) => `url(${new URL(`#${uid}-clip-${d.index}`, location)})`
    )
    .attr("class", "childLabel")
    // translate text element to center of circle so that the tspan coordinates will be relative to this new origin
    .attr("transform", (d) => `translate(${d.x},${d.y})`)
    .selectAll("tspan")
    .data((d) => {
      return `${L[d.index]}`.split(/\n/g);
    })
    .join("tspan")
    .attr("x", (d, i, D) => {
      const tag = d3.select(D[0].parentNode).data()[0].data.tag;
      return tagLabels[tag].x;
    })
    .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
    //.attr("fill-opacity", (d, i, D) => (i === D.length - 1 ? 0.7 : null)) This makes subsequent label lines less dark than the top line
    .style("font-size", (d, i, D) => {
      const node = d3.select(D[0].parentNode).data()[0];
      return `${Math.min(Math.max(Math.log10(node.r) - 0.75, 0.55), 1)}em`;
    })
    .style("cursor", "pointer")
    .on("mouseover", function () {
      d3.select(this.parentNode.parentNode)
        .selectAll("circle")
        .attr("stroke", "#000");
    })
    .on("mouseout", function () {
      d3.select(this.parentNode.parentNode)
        .selectAll("circle")
        .attr("stroke", null);
    })
    .on("click", function (event, d) {
      if (!d.children) {
        const data = d3.select(this.parentNode.parentNode).data()[0].data;
        moreInfo.value = clickData(data);
        clickNode.value = data.name;
      }
    })
    .text((d) => d);

  if (T) node.append("title").text((d, i) => T[i]);

  // Add labels for the parent circles
  svg
    .append("g")
    .style("font-size", "2em")
    .attr("pointer-events", "none")
    .style("width", "100%")
    .style("height", "100%")
    .selectAll("text")
    .data(parents, (d) => d.data.name)
    .join("text")
    .text((d) => tagLabels[d.data.tag].label)
    .attr("transform", (d) => `translate(${d.x},${d.y - 20})`)
    .attr("class", "parentLabel");

  // Add title to chart. Do this last so it draws over the rest of the chart
  svg
    .append("text")
    .attr("pointer-events", "none")
    .attr("x", width / 2)
    .attr("y", height / 12)
    .attr("text-anchor", "middle")
    .style("font-size", "3em")
    .text(chartTitle);

  // Update function to update the hierarchy with new data
  svg.update = (newData) =>
    updatePack(svg, newData, {
      sort,
      label,
      clickData,
      width,
      value, // given a node d, returns a quantitative value (for area encoding; null for count)
      fill,
      fillOpacity, // fill opacity for leaf circles
      stroke, // stroke for internal circles
      strokeWidth, // stroke width for internal circles
      strokeOpacity, // stroke opacity for internal circles
      chartTitle,
    });

  //   const zoomPoint = { x: width / 2, y: height / 2 };
  //
  // // Add zoom behavior
  //   const zoom = d3.zoom()
  //       .scaleExtent([0.1, 10])
  //       .on("zoom", function (event) {
  //         const { x, y, k } = event.transform; // Get the new translation and scale values
  //         const newX = zoomPoint.x - k * (zoomPoint.x - x); // Calculate the new x position
  //         const newY = zoomPoint.y - k * (zoomPoint.y - y); // Calculate the new y position
  //         svg.attr("transform", `translate(${newX},${newY}) scale(${k})`);
  //       });
  //
  //   svg.call(zoom);

  return svg;
}
function updatePack(
  svg,
  newData,
  {
    sort,
    label,
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    clickData, // given a node d, returns the data that should be shown when that node is clicked on
    title, // given a node d, returns its hover text
    width = 1000, // outer width, in pixels
    height = 1000, // outer height, in pixels
    margin = 0, // shorthand for margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    padding = 0, // separation between circles
    fill, // fill for leaf circles
    fillOpacity, // fill opacity for leaf circles
    stroke = "#bbb", // stroke for internal circles
    strokeWidth, // stroke width for internal circles
    strokeOpacity, // stroke opacity for internal circles
    chartTitle,
  }
) {
  const newRoot = d3.hierarchy(newData);

  // Compute the values of internal nodes by aggregating from the leaves.
  newRoot.sum((d) => Math.max(0, value(d)));

  // Sort the leaves (typically by descending value for a pleasing layout).
  newRoot.sort((a, b) => d3.descending(a.value, b.value));

  // Compute labels and titles.
  const descendants = newRoot.descendants();
  const leaves = descendants.filter((d) => !d.children);
  const parents = descendants.filter((d) => d.children && d.data.tag);
  parents.forEach((d, i) => (d.index = i));
  leaves.forEach((d, i) => (d.index = i));

  // Sort the leaves (typically by descending value for a pleasing layout).
  if (sort != null) newRoot.sort(sort);

  // Compute the layout.
  d3
    .pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(newRoot);

  const node = svg.selectAll("a").data(descendants, (d) => d.data.name);
  //
  // if (T) node.append("title").text((d, i) => T[i]);

  node
    .attr("xlink:href", (d) => (d.data.link ? d.data.link : null))
    .attr("target", (d) => (d.data.link ? "_blank" : null))
    //.attr("transform", (d) => `translate(${d.x},${d.y})`)
    .select("circle")
    .attr("fill", (d) => fill(d.data) || "#eee")
    .attr("fill-opacity", (d) => (d.children ? null : fillOpacity))
    .attr("stroke", (d) => (d.children ? stroke : null))
    .attr("stroke-width", (d) => (d.children ? strokeWidth : null))
    .attr("stroke-opacity", (d) => (d.children ? strokeOpacity : null));

  node
    .select("circle")
    .transition()
    .duration(750)
    .attr("r", (d) => d.r)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y);

  // transition parent labels
  svg
    .selectAll("g")
    .selectAll(".parentLabel")
    .data(descendants, (d) => d.data.name)
    .transition()
    .duration(750)
    .attr("transform", (d) => {
      return `translate(${d.x},${d.y - 20})`;
    })
    .style("opacity", (d) => (d.r ? 100 : 0));

  // transition label wrapper
  node
    .select(".childLabel")
    .transition()
    .duration(750)
    .attr("transform", (d) => {
      return `translate(${d.x},${d.y})`;
    })
    .style("opacity", (d) => (d.r ? 100 : 0));

  // transition label segments
  node
    .select("tspan")
    .transition()
    .duration(750)
    .attr("x", (d) => {
      const tag = d.data.tag;
      return tagLabels[tag].x;
    })
    // .attr("y", (d, x) => {
    //   console.log(d, x, L[d.index]);
    //   //`${i - D.length / 2 + 0.85}em`;
    // })
    .style(
      "font-size",
      (d) => `${Math.min(Math.max(Math.log10(d.r) - 0.75, 0.55), 1)}em`
    );
}
</script>

<style scoped>
.chart-row {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 100%;
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
