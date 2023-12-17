<template>
  <section class="main">
    <Wrapper>
      <HeroMain />
    </Wrapper>
  </section>
</template>

<script>
import HeroMain from "./components/HeroMain";

export default {
  name: "Home",
  components: { HeroMain },
  setup() {},
};
</script>

<style scoped lang="scss"></style>
