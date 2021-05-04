<template>
  <div class="projectListItemRoot">
    <div class="projectImage">
      <img :src="img" alt="" />
    </div>
    <div class="projectContent">
      <h4>
        <router-link tag="li" :to="link">{{ text }}</router-link>
      </h4>
      <div class="projectLink">
        <router-link class="btn secondary" tag="li" :to="link"
          >Learn more</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectListItem",
  props: {
    img: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectListItemRoot {
  height: 400px;
  width: 350px;
  border: 2px solid #e2e2e2;
  border-radius: 3px;
  position: relative;

  &:hover {
    transition: all 0.3s ease;
    border-image: linear-gradient(to bottom right, #1900ff, #c86dd7) 1 round;
    border-style: solid;
    border-width: 2px;
    border-radius: 3px;
    box-shadow: 0 18px 29px 0 rgba(73, 73, 73, 0.5);
  }

  .projectImage {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .projectContent {
    margin: 24px 16px;

    h4 {
      text-align: left;
      margin-bottom: 60px;
    }
    a {
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
      color: #000;
      text-align: left;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .projectLink {
    position: absolute;
    bottom: 15px;
  }
  @media screen and (min-width: 1024px) {
  }
}
</style>
