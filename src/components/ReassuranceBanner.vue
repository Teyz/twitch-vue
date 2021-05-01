<template>
  <section class="reassuranceBannerRoot">
    <div class="container">
      <div class="imageContent">
        <img :src="img" alt="Reassurance image for contact page" />
      </div>
      <div class="textContent">
        <h2>{{ text }}</h2>
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
  width: 100%;
  background: $secondary-color;
  @media screen and (min-width: 1024px) {
    padding: 80px 0;

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
          font-weight: 600;
          font-size: 36px;
          line-height: 120%;
          margin: 0;
          padding-top: 10px;
          text-align: left;
          color: white;
        }

        a {
          margin-top: 24px;
        }
      }
    }
  }
}
</style>
