<template>
  <section class="main">
    <Wrapper>
      <Hero
        title="Brawks"
        text="Former professional player on Call of Duty, now an ambassador for @Team_Vitality !"
        i18nKey="brawks"
      />
      <ProjectList />
    </Wrapper>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
import ProjectList from "./components/ProjectList";

export default {
  name: "Home",
  components: { Hero, ProjectList },
  setup() {},
};
</script>

<style scoped lang="scss"></style>
