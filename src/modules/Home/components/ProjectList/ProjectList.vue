<template>
  <section class="projectListRoot">
    <div class="container">
      <Hero
        title="Stories from our Community"
        text="Learn how companies are leveraging Twitch Developer products."
      />
    </div>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
export default {
  name: "ProjectList",
  components: {
    Hero,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectListRoot {
  width: 100%;
  position: relative;
  @media screen and (min-width: 1024px) {
    padding: 80px 0;
  }
}
</style>
