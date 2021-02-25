<template>
  <section class="breadcrumbsRoot">
    <div class="inner">
      <div class="breadcrumbsContent">
        <h2>
          <router-link :to="url">{{ name }} > </router-link>
          {{ project }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    project: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.breadcrumbsRoot {
  padding: 24px;
  h2 {
    font-family: "Akira";
    font-weight: 900;
    font-size: 34px;
    margin: 0;
    color: white !important;

    @media screen and (min-width: 1024px) {
      font-size: 40px !important;
      text-align: center;
    }

    a {
      color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgba(255, 255, 255, 1) !important;
    }
  }
}
</style>
