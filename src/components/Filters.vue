<script setup>
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

const props = defineProps({
  profession: Array,
  experience: Array,
});

const updateExperience = function (experience) {};
</script>

<template>
  <div>
    <h3>Filters</h3>
    Profession
    <v-select
      multiple
      :modelValue="props.profession"
      @update:modelValue="(value) => $emit('profession', value)"
      :options="professionOptions"
    />
    Years in Industry
    <v-select
      multiple
      :modelValue="props.experience"
      @update:modelValue="(value) => $emit('experience', value)"
      :options="experienceOptions"
    />
  </div>
</template>

<style scoped></style>
