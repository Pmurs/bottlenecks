<script setup>
import { computed } from "vue";

const props = defineProps({
  data: Array,
});

const isBottleneck = computed(() => {
  return Object.hasOwn(props.data?.[0] || {}, "description"); // this is terrible, find a better way
});
</script>

<template>
  <div v-if="isBottleneck">
    <div v-for="(item, index) in data" v-bind:key="index">
      <h2>{{ index + 1 }}: {{ item.title }}</h2>
      <div>{{ item.description }}</div>
      <div v-html="item.bottleneck"></div>
    </div>
  </div>
  <div v-else>
    <div v-for="(item, index) in data" v-bind:key="index">
      <h2>{{ index + 1 }}: {{ item.title }}</h2>
      <div v-html="item.investment"></div>
    </div>
  </div>
</template>

<style scoped></style>
