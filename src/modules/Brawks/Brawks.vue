<template>
  <section class="main">
    <Wrapper>
      <Hero
        title="Brawks"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <ProjectList />
    </Wrapper>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";

export default {
  name: "Home",
  components: { Hero, ProjectList },
  setup() {},
};
</script>

<style scoped lang="scss"></style>
