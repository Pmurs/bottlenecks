<script setup lang="ts">
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
    <div v-for="(item, index) in data.items" v-bind:key="index" class="answer">
      <div v-if="data.isBottleneck">
        <h3>{{ index + 1 }}.</h3>
        <div>{{ "Bottleneck: " + item.title }}</div>
        <div>{{ "Why: " + item.description }}</div>
      </div>
      <div v-else>
        <h3>{{ index + 1 }}.</h3>
        <div>{{ "Solution: " + item.title }}</div>
        <div v-for="(investment, index2) in item.investment?.split(/(?<!scale),/)" v-bind:key="index2">
          <div>{{ "Investment: " + investment }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.answers {
  margin-bottom: 1em;
}

.answer {
  margin-bottom: 1em;
}
</style>
