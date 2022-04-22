<template>
  <section class="reassuranceBannerRoot">
    <div class="container">
      <div class="imageContent">
        <img :src="img" alt="Reassurance image for contact page" />
      </div>
      <div class="textContent">
        <h2>{{ $t("message.bannerText") }}</h2>
        <a href="/contact" class="btn light">Contact</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReassuranceBanner",
  props: {
    img: {
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
.reassuranceBannerRoot {
  padding: 40px 16px;
  background: $secondary-color;
  .container {
    .imageContent {
      img {
        width: 100%;
      }
    }

    .textContent {
      h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 120%;
        margin: 0;
        padding-top: 10px;
        text-align: center;
        color: white;
        max-width: 500px;
      }

      a {
        margin-top: 24px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 80px 0;
    width: 100%;

    .container {
      display: flex;
      align-items: center;
      justify-content: center;

      .imageContent {
        img {
          width: 400px;
        }
      }

      .textContent {
        margin-left: 100px;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        h2 {
          font-size: 36px;
          text-align: left;
        }

        a {
          margin-top: 24px;
        }
      }
    }
  }
}
</style>
