<template>
  <LogoHeader class="logo-header" />
  <div
    class="chart-container"
    v-if="bottlenecksChartData && solutionsChartData"
  >
    <BubbleChart
      v-if="chartSelection === 'Bottlenecks' && bottlenecksChartData"
      :chart-data="bottlenecksChartData"
    />
    <BubbleChart
      v-if="chartSelection === 'Solutions' && solutionsChartData"
      :chart-data="solutionsChartData"
    />
    <Filters
      class="filters"
      :profession="professionFilter"
      :experience="experienceFilter"
      @profession="(value) => onUpdateProfessionFilter(value)"
      @experience="(value) => onUpdateExperienceFilter(value)"
    >
      <template v-slot:select>
        <div class="chartSelect-container">
          <v-select
            v-model="chartSelection"
            :options="chartOptions"
            :clearable="false"
            class="chartSelect"
          />
        </div>
      </template>
    </Filters>
  </div>
</template>

<script setup>
import { bottleneckStore } from "@/stores/bottleneckStore";
import { computed, onMounted, ref } from "vue";
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import tagLabels from "@/util/tagLabels.json";
import BubbleChart from "@/components/BubbleChart.vue";
import Filters from "@/components/Filters.vue";
import LogoHeader from "@/components/LogoHeader.vue";

import analysis from "../util/analysis.json";
import tags from "../util/tags.json";

const chartOptions = ["Bottlenecks", "Solutions"];
const chartSelection = ref("Bottlenecks");

const professionFilter = ref([
  "Entrepreneur",
  "Investor",
  "Media",
  "Academic researcher (postdoc/PhD/MSc/BSc student)",
  "Biotech researcher",
  "Other (specify)",
  "Data scientist/Software engineer",
  "Principal investigator/Professor",
  "Executive",
  "Science communicator",
  "Mechanical/physical/electrical engineer",
]);
const experienceFilter = ref(["<1", "1-3", "3-5", "5-10", "10-20", ">20"]);

const bottlenecksChartData = ref(null);
const solutionsChartData = ref(null);

const onUpdateProfessionFilter = function (profession) {
  professionFilter.value = profession;
  generateData();
};

const onUpdateExperienceFilter = function (experience) {
  experienceFilter.value = experience;
  generateData();
};

const filteredBottlenecks = computed(() => {
  const bottlenecks = analysis.bottlenecks;
  return bottlenecks.filter((item) => {
    return (
      (!experienceFilter.value.length ||
        experienceFilter.value.includes(item.experience)) &&
      (!professionFilter.value.length ||
        item.occupations.some((i) => professionFilter.value.includes(i)))
    );
  });
});

const filteredSolutions = computed(() => {
  const solutions = analysis.solutions;
  return solutions.filter((item) => {
    return (
      (!experienceFilter.value.length ||
        experienceFilter.value.includes(item.experience)) &&
      (!professionFilter.value.length ||
        item.occupations.some((i) => professionFilter.value.includes(i)))
    );
  });
});

const generateData = function () {
  const bottlenecks = filteredBottlenecks.value;
  const bTags = tags.bottlenecks;
  const bTagCategories = bTags
    .filter((tag) => tag.tag.match(/\[[A-Z]]/))
    .map((item) => ({
      ...item,
      name: item.tag,
      children: bTags
        .filter(
          (tag) =>
            tag.tag.match(/\[[A-Z][0-9].*]/) &&
            tag.tag.substring(0, 2) === item.tag.substring(0, 2)
        )
        .map((subItem) => ({
          ...subItem,
          name: subItem.tag,
          size: 0,
          bottlenecks: [],
        })),
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

  bottlenecksChartData.value = {
    data: { name: "bottlenecks", children: bTagCategories },
    props: {
      name: (d) => d.bottleneck,
      value: (d) =>
        d.children ? d["Number of responses"] : d.bottlenecks?.length,
      label: (d) => tagLabels[d.tag].label,
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
    },
  };

  const solutions = filteredSolutions.value;
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

  solutions.forEach((item) => {
    const solutionTags = item.tags.filter((tag) => tag.match(/\[\+[A-Z]/));
    if (!solutionTags.length) {
      return;
    }
    solutionTags.forEach((tag) => {
      const parentTag = tag.match(/\[\+[A-Z]/) + "]";
      const parent = sTagCategories.find((item) => item.tag === parentTag);
      const child = parent.children.find((item) => item.tag === tag);
      child.solutions.push(item);
    });
  });

  solutionsChartData.value = {
    data: { name: "solutions", children: sTagCategories },
    props: {
      name: (d) => d.investment,
      value: (d) => {
        return d.children ? d["Number of responses"] : d.solutions?.length;
      },
      label: (d) => tagLabels[d.tag].label,
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
    },
  };
};

onMounted(() => {
  generateData();
});
</script>

<style scoped>
.logo-header {
  //position: absolute;
}

.chartSelect-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;

  .chartSelect {
    width: 200px;
  }
}

.chart-container {
  display: flex;
}

@media (prefers-color-scheme: dark) {
  .chartSelect {
    :deep(.vs__dropdown-toggle) {
      background: #1a282d;

      .vs__selected {
        color: white;
      }

      .vs__open-indicator {
        fill: white;
      }
    }
    :deep(.vs__dropdown-menu) {
      background: #0f1a1c;

      .vs__dropdown-option {
        color: white;
        background: #0f1a1c;
      }

      .vs__dropdown-option--selected,
      .vs__dropdown-option--highlight {
        background: #1a282d;
      }
    }
  }
}
</style>
