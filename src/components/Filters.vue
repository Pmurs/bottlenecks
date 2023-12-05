<template>
  <Transition>
    <div
      class="filters-container"
      :class="{ open: isOpen, closed: !isOpen }"
      @click="isOpen = true"
      v-on-click-outside="closeFilters"
    >
      <Guide class="guide" />
      <slot name="select"></slot>
      <h3 class="title">Filters</h3>
      <div class="profession-container">
        <div class="button-container">
          <span>Profession</span
          ><span>
            <button
              class="btn"
              title="Remove all"
              @click="$emit('profession', [])"
            >
              X
            </button>
            <button
              class="btn"
              title="Select all"
              @click="$emit('profession', professionOptions)"
            >
              All
            </button>
          </span>
        </div>
        <div v-for="option in professionOptions">
          <Toggle
            :value="professionToggles[option]"
            @change="(value) => toggleProfession(option, value)"
            :name="option"
            :title="option"
            :on-label="option"
            :off-label="option"
            class="switch"
          />
        </div>
      </div>
      <div>
        <div class="button-container">
          <span>Years in Industry</span>
          <span
            ><button
              class="btn"
              title="Remove all"
              @click="$emit('experience', [])"
            >
              X
            </button>
            <button
              class="btn"
              title="Select all"
              @click="$emit('experience', experienceOptions)"
            >
              All
            </button></span
          >
        </div>
        <div v-for="option in experienceOptions">
          <Toggle
            :value="experienceToggles[option]"
            @change="(value) => toggleExperience(option, value)"
            :name="option"
            :title="option"
            :on-label="option"
            :off-label="option"
            class="switch"
          />
        </div>
      </div>
      <DataUrl class="data-url" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Toggle from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";
import { useWindowSize } from "@vueuse/core";
import { vOnClickOutside } from "@vueuse/components";

import { computed, ref, watch } from "vue";
import Guide from "./Guide.vue";
import DataUrl from "./DataUrl.vue";

const { width } = useWindowSize();
const isOpen = ref(width.value >= 768);

const props = defineProps<{
  profession: Array<String>;
  experience: Array<String>;
}>();

const emit = defineEmits<{
  (e: "profession", profession: Array<string>): void;
  (e: "experience", experience: Array<string>): void;
}>();

const professionOptions = [
  "Academic researcher (postdoc/PhD/MSc/BSc student)",
  "Biotech researcher",
  "Data scientist/Software engineer",
  "Entrepreneur",
  "Executive",
  "Investor",
  "Mechanical/physical/electrical engineer",
  "Media",
  "Principal investigator/Professor",
  "Science communicator",
  "Other (specify)",
];
const experienceOptions = ["<1", "1-3", "3-5", "5-10", "10-20", ">20"];

const professionToggles = computed(() => {
  return professionOptions.reduce(
    (obj, profession) => ({
      ...obj,
      [profession]: props.profession.includes(profession),
    }),
    {}
  );
});

const experienceToggles = computed(() => {
  return experienceOptions.reduce(
    (obj, experience) => ({
      ...obj,
      [experience]: props.experience.includes(experience),
    }),
    {}
  );
});

const toggleProfession = function (profession: string, value: boolean) {
  const toggleValues = { ...professionToggles.value, [profession]: value };

  emit(
    "profession",
    professionOptions.filter((item) => toggleValues[item])
  );
};
const toggleExperience = function (experience: string, value: boolean) {
  const toggleValues = { ...experienceToggles.value, [experience]: value };

  emit(
    "experience",
    experienceOptions.filter((item) => toggleValues[item])
  );
};

const toggleVisible = function () {
  isOpen.value = !isOpen.value;
};
const closeFilters = function () {
  console.log(width.value);
  if (width.value < 768) {
    isOpen.value = false;
  }
};

watch(width, (newWidth, prevWidth) => {
  if (prevWidth >= 768 && newWidth < 768) {
    isOpen.value = false;
  } else if (prevWidth < 768 && newWidth >= 768) {
    isOpen.value = true;
  }
});
</script>
<style scoped>
.filters-container {
  position: fixed;
  right: 0;
  top: 0;
  padding: 1rem;
  background: lightgray;
  z-index: 1;
  max-width: 236px;
  height: 100vh;

  &.closed {
    min-width: 1em;
    max-width: 1em;
    background: #10b981;
    display: flex;
    justify-content: center;
    cursor: pointer;

    & :not(:nth-child(4)) {
      display: none;
    }

    .title {
      padding-top: 6rem;
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
  }

  .guide {
    display: none;
  }

  .data-url {
    margin-top: 1em;
  }
}

.title {
  margin-bottom: 0.5em;
}

.profession-container {
  margin-bottom: 1em;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--margin-small);

  .btn {
    &:hover {
      cursor: pointer;
    }

    &:last-of-type {
      margin-left: 0.5em;
    }
  }
}

.switch {
  margin-bottom: var(--margin-small);
  --toggle-width: 200px;
  text-overflow: ellipsis;

  :deep(.toggle-label) {
    padding: 0 1em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media (prefers-color-scheme: dark) {
  .filters-container {
    background: #0b1416;
  }
}

@media screen and (min-width: 768px) {
  .filters-wrapper {
    position: unset;
  }

  .filters-container {
    position: absolute;
    right: 0;

    max-width: 190px;
    background: transparent;
    height: 100vh;
    margin-right: unset;
    padding: unset;

    .guide {
      display: inline-block;
    }
  }

  .switch {
    --toggle-width: 190px;
  }
}
</style>
