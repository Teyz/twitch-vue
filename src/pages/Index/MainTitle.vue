<template>
  <section class="mainTitleRoot">
    <h1>
      I'M BASTIEN RIGAUD,
      <span>
        FULLSTACK
      </span>
      DEVELOPPER
    </h1>
    <div class="ctaScroll">
      <span>Scroll</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainTitle",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainTitleRoot {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  .ctaScroll {
    display: none;
    position: relative;

    @media screen and (min-width: 1024px) {
      display: block;
      position: absolute;
      bottom: 0;
      color: rgba($color: white, $alpha: 0.5);

      &:after {
        content: ">";
        top: 0;
        right: -20px;
        position: absolute;
        transform: rotate(90deg);
      }
    }
  }

  @media screen and (min-width: 1024px) {
    min-height: 75vh;
  }
  h1 {
    font-family: "Akira";
    font-weight: 900;
    font-size: 34px;
    margin: 0;
    color: white !important;

    @media screen and (min-width: 1024px) {
      font-size: 80px !important;
      max-width: 700px;
      text-align: left;
    }

    span {
      color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgba(255, 255, 255, 1) !important;
    }
  }
}
</style>
