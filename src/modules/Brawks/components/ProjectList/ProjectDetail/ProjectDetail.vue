<template>
  <section class="projectDetailRoot">
    <div class="container">
      <div class="projectDescription">
        <h3>Project name</h3>
        <p>
          lorem ipseum blablaba fjqoidqzjd hqzdihqziu jqziodjqzo qzid
          jqzdiojqzoi
        </p>
      </div>
      <div class="projectMain">
        <video autoplay width="600" loop>
          <source src="media/Hardzone.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectDetail",
  setup() {},
};
</script>
<style scoped lang="scss">
.projectDetailRoot {
  width: 100%;
  background-color: $secondary-color;
  @media screen and (min-width: 1024px) {
    padding: 80px 0;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      .projectDescription {
        padding: 24px 16px;
        width: 100%;

        h3 {
          color: white;
          font-weight: 800;
          font-size: 40px;
          text-align: left;
          margin-bottom: 10px;
        }

        p {
          color: white;
          text-align: left;
          line-height: 1.5;
        }
      }

      .projectMain {
      }
    }
  }
}
</style>
