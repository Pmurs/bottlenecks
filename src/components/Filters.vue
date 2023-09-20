<script setup lang="ts">
import Toggle from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";

import { computed } from "vue";

const props = defineProps<{
  profession: Array<String>;
  experience: Array<String>;
}>();

const emit = defineEmits<{
  (e: "profession", profession: Array<string>): void;
  (e: "experience", experience: Array<string>): void;
}>();

const professionOptions = [
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
</script>

<template>
  <div>
    <h3 class="title">Filters</h3>
    <div class="profession-container">
      <div class="button-container">
        <span>Profession</span
        ><span>
          <button @click="$emit('profession', [])">X</button>
          <button @click="$emit('profession', professionOptions)">All</button>
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
          ><button @click="$emit('experience', [])">X</button>
          <button @click="$emit('experience', experienceOptions)">
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
</template>

<style scoped>
.title {
  margin-bottom: 0.5em;
}

.profession-container {
  margin-bottom: 1em;
}

.button-container {
  display: flex;
  justify-content: space-between;
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
</style>
