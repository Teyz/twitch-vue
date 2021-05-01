<template>
  <section class="wrapperRoot">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Wrapper",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapperRoot {
  z-index: 1;
  position: relative;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
</style>
