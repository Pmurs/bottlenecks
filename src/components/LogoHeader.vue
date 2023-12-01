<template>
  <div class="title-container">
    <h1 class="title">
      <img
        src="src/assets/LBF%20logo.png"
        alt="LBF Logo"
        class="lbf-logo"
      />Longevity Bottlenecks
    </h1>
  </div>
</template>

<script>
export default {
  name: "LogoHeader",
};
</script>

<style scoped>
.title-container {
  margin-top: -2rem;
  margin-left: -2rem;
  padding-left: 0.5rem;

  .title {
    display: flex;
    align-items: center;
    vertical-align: middle;
    font-size: 1.5em;

    .lbf-logo {
      width: 25px;
      height: auto;
      display: inline-block;
      margin-right: 0.5em;
    }
  }
}

@media screen and (min-width: 768px) {
  .title-container {
    position: unset;
    margin-top: unset;
    margin-left: unset;
    padding-left: unset;

    .title {
      font-size: 2em;
      .lbf-logo {
        width: 50px;
      }
    }
  }
}
</style>
