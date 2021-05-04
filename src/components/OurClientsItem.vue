<template>
  <div class="ourClientsItemRoot">
    <a :href="link" target="_blank">
      <img :src="img" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "OurClientsItem",
  props: {
    img: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ourClientsItemRoot {
  width: 100%;
  img {
    height: 100px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 32px;
  }
}
</style>
