<template>
  <section class="textImageSectionRoot">
    <div class="imageSection" data-aos="zoom-out-right" data-aos-delay="300">
      <img :src="image" alt="" />
    </div>
    <div class="textSection" data-aos="zoom-out-left" data-aos-delay="600">
      {{ text }}
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "TextImageSection",
  created() {
    AOS.init();
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "left",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.textImageSectionRoot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    .imageSection {
      padding: 8px;
      text-align: end;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .textSection {
      padding: 8px;
      max-width: 30vw;
      text-align: left;
    }
  }
}
</style>
