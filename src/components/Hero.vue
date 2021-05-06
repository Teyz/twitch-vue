<template>
  <section class="heroRoot">
    <div class="container">
      <h1>{{ title }}</h1>
      <h3>{{ text }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heroRoot {
  background: #faf9fa;
  padding: 40px 16px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    line-height: 120%;
    text-align: center;
    margin: 0;
    margin-bottom: 14px;
  }

  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    margin-top: 0;
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    padding: 80px 0;
    width: 100%;

    .container {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;

      h1 {
        font-size: 72px;
      }

      h3 {
        font-size: 24px;
      }
    }
  }
}
</style>
