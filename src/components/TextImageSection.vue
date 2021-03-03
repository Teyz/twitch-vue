<template>
  <section class="textImageSectionRoot" :class="{ reversImage: isReverse }">
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
import { onMounted } from "vue";
export default {
  name: "TextImageSection",
  props: {
    image: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    onMounted(() => {
      AOS.init();
    });
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
    max-width: 400px;
  }

  .textSection,
  .imageSection {
    margin-top: 16px;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 48px;
    flex-direction: row;

    &.reversImage {
      flex-direction: row-reverse;

      .imageSection {
        padding-left: 24px;
      }

      .textSection {
        padding-right: 24px;
        padding-left: 0;
      }
    }

    .imageSection {
      padding-right: 24px;
      text-align: end;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .textSection {
      padding-left: 24px;
      max-width: 40vw;
      text-align: left;
    }
  }
}
</style>
