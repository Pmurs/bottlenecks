<template>
  <Transition>
    <div
      class="filters-container"
      :class="{ open: isOpen, closed: !isOpen }"
      @click="isOpen = true"
      v-on-click-outside="closeFilters"
    >
      <h3 class="title">Filters</h3>
      <div class="profession-container">
        <div class="button-container">
          <span>Profession</span
          ><span>
            <button class="btn" @click="$emit('profession', [])">X</button>
            <button class="btn" @click="$emit('profession', professionOptions)">
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
            ><button class="btn" @click="$emit('experience', [])">X</button>
            <button class="btn" @click="$emit('experience', experienceOptions)">
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
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Toggle from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";
import { useWindowSize } from "@vueuse/core";
import { vOnClickOutside } from "@vueuse/components";

import { computed, ref, watch } from "vue";

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
  position: absolute;
  right: 0;
  top: -6rem;
  margin-right: -2rem;
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

    & :not(:first-child) {
      display: none;
    }

    .title {
      padding-top: 5em;
      writing-mode: vertical-lr;
      text-orientation: upright;
    }
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

  .btn {
    border-radius: 0;

    &:hover {
      cursor: pointer;
    }

    &:last-of-type {
      margin-left: 0.5em;
    }
  }
}

.switch {
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
    background: gray;
  }
}

@media screen and (min-width: 768px) {
  .filters-container {
    position: absolute;
    right: 0;

    max-width: 200px;
    background: transparent;
    height: 100vh;
    margin-right: unset;
    padding: unset;
  }
}
</style>
