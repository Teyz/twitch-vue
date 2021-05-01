<template>
  <section class="main">
    <Wrapper>
      <HeroMain />
      <ReassuranceBanner
        img="img/glitch-example.png"
        text="Create your first extension on Glitch"
      />
      <OurClients />
    </Wrapper>
  </section>
</template>

<script>
import HeroMain from "./components/HeroMain";
import ReassuranceBanner from "@/components/ReassuranceBanner";
import OurClients from "@/components/OurClients";

export default {
  name: "Home",
  components: { HeroMain, ReassuranceBanner, OurClients },
  setup() {},
};
</script>

<style scoped lang="scss"></style>
