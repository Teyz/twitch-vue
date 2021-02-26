<template>
  <section class="brawksRoot">
    <div class="inner">
      <Breadcrumbs name="Brawks" project="Project 1" url="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore.
      </p>
      <Counter />
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue";
import Counter from "./Brawks/Counter.vue";
export default {
  components: { Breadcrumbs, Counter },
  name: "Brawks",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.brawksRoot {
  padding-top: 64px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    padding-top: 0px;
  }
}
</style>
