<script setup>
import tagLabels from "@/util/tagLabels.json";

const props = defineProps({
  data: {
    title: String,
    description: String,
    items: Array,
    isBottleneck: Boolean,
  },
});
</script>

<template>
  <div v-if="data?.items?.length">
    <h1>{{ data.title.split("]")[1] }}</h1>
    <h2>{{ data.description }}</h2>
    <div>Count: {{ data.items.length }}</div>
    <div class="answers">Answers:</div>
    <ol class="answers-list">
      <li v-for="(item, index) in data.items" v-bind:key="index" class="answer">
        <div v-if="data.isBottleneck">
          <div>{{ "Bottleneck: " + item.title }}</div>
          <div v-html="'Why: ' + item.description"></div>
        </div>
        <div v-else>
          <div>{{ item.title }}</div>
          <!--        <div v-for="(investment, index2) in item.investment?.split(/(?<!scale),/)" v-bind:key="index2">-->
          <!--          <div>{{ "Investment: " + investment }}</div>-->
          <!--        </div>-->
        </div>
        <div><strong>Tags:</strong></div>
        <ul
          class="tags-list"
          v-for="(tag, index) in item.tags"
          v-bind:key="index"
        >
          <li>{{ tag + " " + tagLabels[tag].label }}</li>
        </ul>
      </li>
    </ol>
  </div>
  <div v-else>
    <p class="help">Choose to view Bottlenecks or Solutions using the dropdown</p>
    <p class="help">Click on a bubble to see all the responses tagged to that bottleneck.</p>
    <p class="help">
      Use the filters on the right to narrow the results by profession and
      experience.
    </p>
  </div>
</template>

<style scoped>
.help {
  margin-bottom: 1em;
}

.answers {
  margin-bottom: 2em;
}

.answers-list {
  padding-left: 0.5em;

  .answer {
    margin-bottom: 1em;
  }

  .tags-list {
    margin: 0;
    padding-left: 1em;
    list-style-type: none;

    li {
      text-indent: -5px;

      &:before {
        content: "- ";
        text-indent: -5px;
      }
    }
  }
}
</style>
