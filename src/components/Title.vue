<template>
  <section class="titleRoot">
    <div class="container">
      <h2>{{ title }}</h2>
      <h3>{{ text }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "Title",
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
.titleRoot {
  background: #faf9fa;
  padding: 40px 16px;
  width: 100%;

  h2 {
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

    .container {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;

      h2 {
        font-size: 60px;
      }

      h3 {
        font-size: 24px;
      }
    }
  }
}
</style>
