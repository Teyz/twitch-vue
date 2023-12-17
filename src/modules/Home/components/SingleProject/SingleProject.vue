<template>
  <section class="singleProjectRoot">
    <div class="container">
      <img src="/img/tiktok-1.png" alt="" />
      <img src="/img/tiktok-2.png" alt="" />
    </div>
  </section>
</template>

<script>
import TextColumn from "@/components/TextColumn";
export default {
  name: "SingleProject",
  components: { TextColumn },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.singleProjectRoot {
  width: 100%;
  .container {
    img {
      width: 500px;
    }
  }
  @media screen and (min-width: 1024px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;

      .videoContent {
        video {
          width: 600px;
        }
      }
    }
  }
}
</style>
