<script setup>
import tagLabels from "@/util/tagLabels.json";
import Guide from "@/components/Guide.vue";

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
  <div class="bottleneck-details">
    <div v-if="data?.count > 0" class="answers-container">
      <h3 class="tag-title">{{ data.title }}</h3>
      <h4 class="description">{{ data.description }}</h4>
      <div class="count">Count: {{ data.count }}</div>
      <h4 class="answers" v-if="data?.items?.length">Answers:</h4>
      <ol class="answers-list" v-if="data?.items?.length">
        <li
          v-for="(item, index) in data.items"
          v-bind:key="index"
          class="answer"
        >
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
    <Guide v-else class="guide" />
  </div>
</template>

<style scoped>
.bottleneck-details {
  font-size: 12px;
  padding-top: 2em;
  display: flex;
  justify-content: center;
}

.answers-container {
  padding-right: 1.5rem;
}

.tag-title {
  font-weight: bold;
  margin-bottom: 0.5em;
  font-size: 1.5em;
}

.description {
  font-weight: bold;
}

.count {
  margin-bottom: 2em;
}

.answers {
  font-weight: bold;
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

.guide {
  width: max-content;
}

@media screen and (min-width: 768px) {
  .bottleneck-details {
    padding-right: unset;
  }

  .guide {
    display: none;
  }
}
</style>
