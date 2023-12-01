<template>
  <div class="guide-container">
    <p class="help">Guide:</p>
    <p class="help">
      1) Choose Bottlenecks or Solutions graph using the dropdown
    </p>
    <p class="help">2) Filter based on profession/experience</p>
    <p class="help">3) Click on a bubble to see individual answers</p>
  </div>
</template>

<script>
export default {
  name: "Guide",
};
</script>

<style scoped>
.guide-container {
  font-size: .75em;
  margin-bottom: 1em;

  .help {
    margin-bottom: 0.25em;
    &:first-child {
      font-weight: bold;
    }
  }
}
</style>
