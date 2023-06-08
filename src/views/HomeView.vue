<script setup>
import { bottleneckStore } from "@/stores/bottleneckStore";
import BubbleChart from "@/components/BubbleChart.vue";
import { onMounted, ref } from "vue";
import CirclePacking from "@/components/CirclePacking.vue";

const hasMounted = ref(false);

onMounted(async () => {
  hasMounted.value = true;
});
</script>

<template>
  <main v-if="hasMounted">
    <CirclePacking/>
  </main>
</template>
