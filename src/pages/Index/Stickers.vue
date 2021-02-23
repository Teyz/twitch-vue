<template>
  <section class="stickersRoot">
    <div class="stickersMain">
      <div class="sticker">
        <img src="/img/Index/sticker.svg" alt="Sticker Github" />
        <span class="title-company">
          23 Github projects
        </span>
      </div>
      <div class="purpleSticker">
        <img src="/img/Index/sticker-purple.svg" alt="Sticker Hackathon" />
        <span class="title-company">
          Hackathon winner
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Stickers",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stickersRoot {
  z-index: 0;
  padding: 24px;
  position: relative;
  @media screen and (min-width: 1024px) {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translate(-40%, -70%);
  }
  .stickersMain {
    position: relative;
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
    }
    .sticker {
      position: relative;
      .title-company {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: rotate(-10deg) translate(-50%, -95%);
        background-color: #f2c94c;
        color: black;
        font-family: "Favorit Regular";
        font-size: 15px;
        line-height: 16px;
        padding: 12px;
        width: 180px;
      }
    }
  }
  .purpleSticker {
    position: relative;
    .title-company {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: rotate(15deg) translate(-52%, 10%);
      background-color: white;
      color: black;
      font-family: "Favorit Regular";
      font-size: 15px;
      line-height: 16px;
      padding: 12px;
      width: 180px;
    }
    @media screen and (min-width: 1024px) {
      position: absolute;
      right: -80%;
      top: 50%;
    }
  }
}
</style>
