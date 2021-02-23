<template>
  <section class="wrapperRoot">
    <h1 class="background-title" :id="size">
      {{ title }}
    </h1>
    <slot />
  </section>
</template>

<script>
export default {
  name: "Wrapper",
  props: {
    title: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  mounted() {
    this.bgGenerate();
  },
  methods: {
    bgGenerate() {
      let spaccing = 179;
      const sectionWrapper = document.querySelector(".wrapperRoot");
      for (let i = 0; i < 7; i++) {
        let verticalDivider = document.createElement("div");
        verticalDivider.classList.add("verticalDivider");
        verticalDivider.style.left = spaccing + "px";
        if (spaccing > 179) {
          verticalDivider.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
        sectionWrapper.appendChild(verticalDivider);
        spaccing += 179;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapperRoot {
  padding: 24px;
  z-index: 1;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
