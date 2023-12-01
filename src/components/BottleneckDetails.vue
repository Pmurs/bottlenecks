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
        <div>Tags:</div>
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
</template>

<style scoped>
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
