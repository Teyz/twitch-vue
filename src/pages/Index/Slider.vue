<template>
  <div class="sliderRoot">
    <h3 data-aos="zoom-out-down">Les framework que je maitrise</h3>
    <ul class="sliderList">
      <li v-for="item in listItem" :key="item.link">
        <SliderItem
          :image="item.link"
          data-aos="fade-down"
          :data-aos-delay="item.delay"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import SliderItem from "./SliderItem";
import { onMounted } from "vue";
import getData from "./SliderList";
export default {
  name: "Slider",
  components: { SliderItem },
  setup() {
    const listItem = getData;

    onMounted(() => {
      AOS.init();
    });
    return {
      listItem,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sliderRoot {
  h3 {
    text-align: left;
  }
  .sliderList {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }
}
</style>
