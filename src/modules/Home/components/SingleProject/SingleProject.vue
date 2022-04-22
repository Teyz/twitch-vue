<template>
  <section class="singleProjectRoot">
    <div class="container">
      <div class="videoContent">
        <video autoplay width="600" loop>
          <source src="media/Hardzone.webm" type="video/mp4" />
        </video>
      </div>
      <TextColumn
        title="Bot, website, ..."
        text="I offer streamers and others custom solutions. From the simple website to the more complex one, but also extensions and Twitch bot."
      />
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
    .videoContent {
      video {
        width: 100%;
      }
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
