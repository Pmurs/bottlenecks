<template>
  <div id="chart"></div>
  <div class="urlContainer">
    Full data
    <strong>
      <a
        href="https://docs.google.com/spreadsheets/d/1aomCkAlaHNbNBEPjLeDbwLr3TazAxhU4f9idJQvbL2s/edit?usp=sharing"
        target="_blank"
        >here</a
      >
    </strong>
  </div>
  <div>
    <BottleneckDetails :data="moreInfo" />
  </div>
</template>

<script setup>
import * as d3 from "d3";
import { bottleneckStore } from "@/stores/bottleneckStore";
import { onMounted, ref } from "vue";
import BottleneckDetails from "@/components/BottleneckDetails.vue";

const store = bottleneckStore();
const analysis = store.analysis;
const tags = store.tags;
const moreInfo = ref({
  title: "",
  description: "",
  items: [],
  isBottleneck: false,
});

// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/pack
function Pack(
  data,
  {
    // data is either tabular (array of objects) or hierarchy (nested objects)
    path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
    id = Array.isArray(data) ? (d) => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
    parentId = Array.isArray(data) ? (d) => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
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
  // If id and parentId options are specified, or the path option, use d3.stratify
  // to convert tabular data to a hierarchy; otherwise we assume that the data is
  // specified as an object {children} with nested objects (a.k.a. the “flare.json”
  // format), and use d3.hierarchy.
  const root =
    path != null
      ? d3.stratify().path(path)(data)
      : id != null || parentId != null
      ? d3.stratify().id(id).parentId(parentId)(data)
      : d3.hierarchy(data, children);

  // Compute the values of internal nodes by aggregating from the leaves.
  value == null ? root.count() : root.sum((d) => Math.max(0, value(d)));

  // Compute labels and titles.
  const descendants = root.descendants();
  const leaves = descendants.filter((d) => !d.children);
  const parents = descendants.filter((d) => d.children && d.data.tag);
  parents.forEach((d, i) => (d.index = i));
  leaves.forEach((d, i) => (d.index = i));
  const PL = label == null ? null : parents.map((d) => label(d.data, d));
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
    .data(descendants)
    .join("a")
    .attr("xlink:href", link == null ? null : (d, i) => link(d.data, d))
    .attr("target", link == null ? null : linkTarget)
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  node
    .append("circle")
    .attr("fill", (d) => fill(d.data) || "#eee")
    .attr("fill-opacity", (d) => (d.children ? null : fillOpacity))
    .attr("stroke", (d) => (d.children ? stroke : null))
    .attr("stroke-width", (d) => (d.children ? strokeWidth : null))
    .attr("stroke-opacity", (d) => (d.children ? strokeOpacity : null))
    .attr("r", (d) => d.r)
    .style("cursor", "pointer")
    .on("mouseover", function () {
      d3.select(this).attr("stroke", "#000");
    })
    .on("mouseout", function () {
      d3.select(this).attr("stroke", null);
    })
    .on("click", (event, d) => {
      console.log(d);
      if (!d.children) {
        moreInfo.value = clickData(d.data);
      }
    });

  if (T) node.append("title").text((d, i) => T[i]);

  if (PL) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    const leaf = node.filter(
      (d) => d.children && d.r > 10 && PL[d.index] != null
    );

    leaf
      .append("text")
      .selectAll("tspan")
      .data((d) => `${PL[d.index]}`.split(/\n/g))
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
      .attr("fill-opacity", (d, i, D) => (i === D.length - 1 ? 0.7 : null))
      .text((d) => d);
  }

  if (L) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    const leaf = node.filter(
      (d) => !d.children && d.r > 10 && L[d.index] != null
    );

    // leaf
    //   .append("clipPath")
    //   .attr("id", (d) => `${uid}-clip-${d.index}`)
    //   .append("circle")
    //   .attr("r", (d) => d.r);

    leaf
      .append("text")
      .attr(
        "clip-path",
        (d) => `url(${new URL(`#${uid}-clip-${d.index}`, location)})`
      )
      .selectAll("tspan")
      .data((d) => `${L[d.index]}`.split(/\n/g))
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
      .attr("fill-opacity", (d, i, D) => (i === D.length - 1 ? 0.7 : null))
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
          moreInfo.value = clickData(
            d3.select(this.parentNode.parentNode).data()[0].data
          );
        }
      })
      .text((d) => d);
  }

  // Add title to chart. Do this last so it draws over the rest of the chart
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", height / 12)
    .attr("text-anchor", "middle")
    .style("font-size", "3em")
    .text(chartTitle);

  return svg.node();
}

onMounted(() => {
  const bottlenecks = analysis.bottlenecks;
  const bTags = tags.bottlenecks;
  const bTagCategories = bTags
    .filter((tag) => tag.tag.match(/\[[A-Z]]/))
    .map((item) => ({
      ...item,
      children: bTags
        .filter(
          (tag) =>
            tag.tag.match(/\[[A-Z][0-9].*]/) &&
            tag.tag.substring(0, 2) === item.tag.substring(0, 2)
        )
        .map((subItem) => ({ ...subItem, size: 0, bottlenecks: [] })),
    }));

  bottlenecks.forEach((item) => {
    const bottleneckTags = item.tags.filter((tag) => tag.match(/\[[A-Z]/));
    if (!bottleneckTags.length) {
      return;
    }
    bottleneckTags.forEach((tag) => {
      const parentTag = tag.match(/\[[A-Z]/) + "]";
      const parent = bTagCategories.find((item) => item.tag === parentTag);
      const child = parent.children.find((item) => item.tag === tag);
      child.bottlenecks.push(item);
    });
  });

  const chart = Pack(
    { name: "bottlenecks", children: bTagCategories },
    {
      name: (d) => d.bottleneck,
      value: (d) => d["Number of responses"],
      label: (d) => d["Q2 Bottleneck"].match(/(\[[A-Z][0-9]?.*])(.+)/)[2],
      title: (d) => d["Q2 Bottleneck"] + ":\n" + d["Bottleneck Description"],
      fill: (d) => d.color,
      clickData: (d) => ({
        title: d["Q2 Bottleneck"],
        description: d["Bottleneck Description"],
        items: d.bottlenecks,
        isBottleneck: true,
      }),
      width: 1152,
      chartTitle: "Bottlenecks",
    }
  );
  document.getElementById("chart").append(chart);

  const solutions = analysis.solutions;
  const sTags = tags.solutions;
  const sTagCategories = sTags
    .filter((tag) => tag.tag.match(/\[\+[A-Z]]/))
    .map((item) => ({
      ...item,
      children: sTags
        .filter(
          (tag) =>
            tag.tag.match(/\[\+[A-Z][0-9].*]/) &&
            tag.tag.substring(0, 3) === item.tag.substring(0, 3)
        )
        .map((subItem) => ({ ...subItem, solutions: [] })),
    }));

  console.log(sTagCategories);

  solutions.forEach((item) => {
    const solutionTags = item.tags.filter((tag) => tag.match(/\[\+[A-Z]/));
    if (!solutionTags.length) {
      return;
    }
    solutionTags.forEach((tag) => {
      const parentTag = tag.match(/\[\+[A-Z]/) + "]";
      const parent = sTagCategories.find((item) => item.tag === parentTag);
      const child = parent.children.find((item) => item.tag === tag);
      console.log(parentTag, parent, child)
      child.solutions.push(item);
    });
  });

  const chart2 = Pack(
    { name: "solutions", children: sTagCategories },
    {
      name: (d) => d.investment,
      value: (d) => d['Number of responses'],
      label: (d) => {
        return d["Q3 Solution"].match(/(\[\+[A-Z][0-9]?.*])(.+)/)[2];
      },
      title: (d) => d["Q3 Solution"] + ":\n" + d["Solution Description"],
      fill: (d) => d.color,
      clickData: (d) => ({
        title: d["Q3 Solution"],
        description: d["Solution Description"],
        items: d.solutions,
        isBottleneck: false,
      }),
      width: 1152,
      chartTitle: "Solutions",
    }
  );
  document.getElementById("chart").append(chart2);
});
</script>

<style scoped>
#chart {
  display: flex;
  flex-direction: row;
  max-width: 100%;
}

.urlContainer {
  text-align: center;
  margin-bottom: 3em;
}
</style>
