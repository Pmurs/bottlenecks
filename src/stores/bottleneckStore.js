import { defineStore } from "pinia";
import { useRouter } from "vue-router";

import analysis from "../util/analysis.json";
import tags from "../util/tags.json";

export const bottleneckStore = defineStore("bottleneck", () => {
  const router = useRouter();

  return {
    analysis,
    tags,
  };
});
