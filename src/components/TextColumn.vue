<template>
  <div class="textColumnRoot">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TextColumn",
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
.textColumnRoot {
  width: 100%;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 300px;
    margin: 32px;

    h3 {
      font-weight: 400;
      font-size: 24px;
      line-height: 120%;
      margin-top: 0;
      text-align: left;
      width: 100%;
      margin-bottom: 16px;
    }

    p {
      line-height: 150%;
    }
  }
}
</style>
