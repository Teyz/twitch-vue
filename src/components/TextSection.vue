<template>
  <section class="textSectionRoot" data-aos="zoom-out-down">
    <div class="inner">
      <h2>
        {{ title }}
      </h2>
      <p>
        {{ text }}
      </p>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "TextSection",
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
  created() {
    AOS.init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.textSectionRoot {
  padding: 24px 24px 48px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    h2 {
      text-align: left;
    }
    p {
      max-width: 50vw;
      text-align: left;
    }
  }
}
</style>
