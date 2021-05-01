<template>
  <section class="singleProjectRoot">
    <div class="container">
      <div class="videoContent">
        <video autoplay width="600" loop>
          <source src="media/Hardzone.mp4" type="video/mp4" />
        </video>
      </div>
      <TextColumn
        title="Twitch Extensions"
        text="Twitch Extensions enable you
      to create live apps that interact with the stream, as a panel on a
      channel, or with chat. Create interactive experiences such as mini-games,
      leaderboards, live gear information and more."
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
  @media screen and (min-width: 1024px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
