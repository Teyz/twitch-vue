<template>
  <section class="main">
    <Wrapper>
      <HeroMain />
      <ReassuranceBanner
        img="img/glitch-example.webp"
        text="Order your custom web project now."
      />
      <ProjectList />
      <OurClients />
    </Wrapper>
  </section>
</template>

<script>
import HeroMain from "./components/HeroMain";
import ReassuranceBanner from "@/components/ReassuranceBanner";
import OurClients from "@/components/OurClients";
import ProjectList from "./components/ProjectList";

export default {
  name: "Home",
  components: { HeroMain, ReassuranceBanner, OurClients, ProjectList },
  setup() {},
};
</script>

<style scoped lang="scss"></style>
