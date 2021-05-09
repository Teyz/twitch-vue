<template>
  <section class="main">
    <Wrapper>
      <div class="NotFoundRoot">
        <div class="container">
          <h2>Oops, something went wrong!</h2>
          <img src="/img/notfound.png" alt="" />
        </div>
      </div>
    </Wrapper>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
  setup() {},
};
</script>

<style scoped lang="scss">
.NotFoundRoot {
  width: 100%;
  height: calc(100vh - 225px);
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    h2 {
      font-size: 40px;
      font-weight: 800;
      margin-bottom: 24px;
    }

    img {
      width: 600px;
    }
  }
}
</style>
