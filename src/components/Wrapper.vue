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
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
}
</style>
