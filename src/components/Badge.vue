<template>
  <div class="badgeRoot">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.badgeRoot {
  border-radius: 1000px;
  background-color: #9147ff;
  padding: 0.3rem 0.8em;
  font-size: 9px;
  line-height: 10px;
  font-weight: 600 !important;
  text-transform: uppercase;
  margin-right: 8px;
  @media screen and (min-width: 1024px) {
  }
}
</style>
