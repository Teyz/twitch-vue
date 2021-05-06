<template>
  <section class="projectDetailRoot">
    <div class="container">
      <div class="projectDescription">
        <div class="tags">
          <div
            class="tag"
            v-for="(formatedTags, index) in formatedTags"
            :key="index"
          >
            {{ formatedTags }}
          </div>
        </div>
        <h3>{{ name }}</h3>
        <p>
          {{ description }}
        </p>
        <a :href="link" class="btn light" target="_blank">Show on Twitch</a>
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
import { computed } from "vue";
export default {
  name: "ProjectDetail",
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    tags: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const formatedTags = computed(() => props.tags.split(", "));
    return {
      formatedTags,
    };
  },
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
      justify-content: space-between;

      .projectDescription {
        padding: 0px 16px 24px 16px;
        width: 100%;
        max-width: 400px;
        align-self: center;
        text-align: left;

        .tags {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 16px;

          .tag {
            padding: 4px;
            border-radius: 4px;
            background-color: rgba($color: white, $alpha: 0.1);
            border: 1px solid rgba($color: white, $alpha: 0.1);
            color: white;
            margin: 4px;
            cursor: default;
            font-weight: 600;
            font-size: 10px;

            &:first-child {
              margin-left: 0;
            }
          }
        }

        h3 {
          color: white;
          font-weight: 800;
          font-size: 40px;
          text-align: left;
          margin-bottom: 10px;
          margin-top: 0;
        }

        p {
          color: white;
          text-align: left;
          line-height: 1.5;
          margin-bottom: 24px;
        }
      }

      .projectMain {
        padding: 24px 16px;

        video {
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
