<template>
  <section class="heroMainRoot">
    <div class="container">
      <Hero
        title="Build the future of live entertainment."
        text="Twitch provides developers products and solutions that extend the lifecycle
                of entertainment beyond the screen."
      />
      <SingleProject />
    </div>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
import SingleProject from "../SingleProject";
export default {
  name: "HeroMain",
  components: {
    Hero,
    SingleProject,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heroMainRoot {
  width: 100%;
  background: #faf9fa;
  position: relative;

  @media screen and (min-width: 1024px) {
    padding: 80px 0;
    overflow: hidden;

    &:before {
      content: url(/img/circles-1.png);
      position: absolute;
      left: -15%;
      top: 10%;
    }

    &:after {
      content: url(/img/circles-2.png);
      position: absolute;
      right: -15%;
      bottom: -20%;
    }
  }
}
</style>
