<template>
  <div class="textColumnRoot">
    <h3>{{ $t("message.singleProjectTitle") }}</h3>
    <p>{{ $t("message.singleProjectText") }}</p>
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
  margin: 40px 16px;

  h3 {
    font-weight: 400;
    font-size: 32px;
    line-height: 120%;
    margin-top: 0;
    text-align: center;
    width: 100%;
    margin-bottom: 16px;
  }

  p {
    line-height: 150%;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 300px;
    margin: 32px;

    h3 {
      font-size: 24px;
      text-align: left;
    }

    p {
      font-size: 20px;
    }
  }
}
</style>
