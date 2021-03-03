<template>
  <div class="sliderItemRoot">
    <div class="container">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SliderItem",
  props: {
    image: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const image = ref(props.image);
    return {
      image,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sliderItemRoot {
  margin: 32px;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 150px;
      filter: grayscale(100%);
    }
  }
}
</style>
