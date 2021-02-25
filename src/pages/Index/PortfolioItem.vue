<template>
  <div class="portfolioItemRoot" data-aos="fade-down-right">
    <img :src="image" alt="" />
    <div class="portfolioContent">
      <h2>{{ title }}</h2>
      <p>
        {{ text }}
      </p>
      <router-link to="/brawks">Decouvrir</router-link>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "PortfolioItem",
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    image: {
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
.portfolioItemRoot {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    position: relative;
  }

  img {
    max-width: 300px;
    @media screen and (min-width: 1024px) {
      max-width: 300px;
    }
  }
  .portfolioContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1024px) {
      max-width: 343px;
      align-items: flex-start;
      margin-left: 24px;
    }
    h2 {
      text-transform: uppercase;
      font-family: "Akira";
      color: white;
      font-size: 30px;
      margin-bottom: 0px;
      @media screen and (min-width: 1024px) {
        font-size: 69px;
        position: absolute;
        top: 0;
        left: 35%;
      }
    }

    p {
      color: white;
      @media screen and (min-width: 1024px) {
        text-align: left;
      }
    }

    a {
      position: relative;
      padding-left: 32px;

      &:before {
        content: "";
        background-image: url("/img/right-arrow.svg");
        width: 100%;
        height: 100%;
        left: 0;
        background-repeat: no-repeat;
        position: absolute;
      }
    }
  }
}
</style>
