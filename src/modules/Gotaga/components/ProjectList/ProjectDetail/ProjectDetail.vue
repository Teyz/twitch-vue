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
        <h4 v-if="concept">Concept</h4>
        <p>
          {{ $t(`${i18nKey}.concept`) }}
        </p>
        <h4>{{ $t(`utils.developpment`) }}</h4>
        <p>
          {{ $t(`${i18nKey}.description`) }}
        </p>
        <a :href="link" class="btn light" target="_blank">{{ $t(`utils.show`) }}</a>
      </div>
      <div class="projectMain">
        <div class="webcamRoot">
          <camera :resolution="{ width: 206, height: 131 }" autoplay class="camera" ref="camera" @loading="loading"
        @started="started"
        @stopped="stopped"
        @paused="paused"
        @resumed="resumed"
        @camera-change="cameraChange"
        @snapshot="snapshot"/>
          <div v-if="isLoading" class="no_camera"></div>
          <img :src="`img/gameSelect/${gameSelect}.png`" alt="Game logo for Gotaga at ZLan" class="gameSelectLogo" :class="{isLoading}">
          <video autoplay loop>
            <source src="media/cam_gotaga.webm" type="video/webm" />
          </video>
        </div>
        <select v-model="gameSelect" class="gameSelect">
          <option disabled>Please select one</option>
          <option value="rl">Rocket League</option>
          <option value="apex">Apex Legends</option>
          <option value="aoe">Age of Empire</option>
        </select>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "ProjectDetail",
  props: {
    name: {
      type: String,
      default: "",
    },
    concept: {
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
    index: {
      type: Number,
      default: 0,
    },
    tags: {
      type: String,
      default: "",
    },
    i18nKey: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const formatedTags = computed(() => props.tags.split(", "));
    const gameSelect = ref("apex");
    const isLoading = ref(true);

    const loading = () => isLoading.value = true;
    const started = () => isLoading.value = false;
    const stopped = () => isLoading.value = true;

    return {
      formatedTags,
      gameSelect,
      loading,
      started,
      stopped,
      isLoading
    };
  },
};
</script>
<style scoped lang="scss">
.projectDetailRoot {
  width: 100%;
  background-color: $secondary-color;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    .projectDescription {
      padding: 24px 16px 24px 16px;
      align-self: center;
      text-align: center;

      .tags {
        display: flex;
        align-items: center;
        justify-content: center;
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
        text-align: center;
        margin-bottom: 16px;
        margin-top: 0;
      }

      h4 {
        color: white;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
        font-size: 24px;
      }

      p {
        color: white;
        text-align: center;
        line-height: 1.5;
        margin-bottom: 24px;
      }
    }

    .projectMain {
      display: flex;
      flex-direction: column;
      padding: 24px 16px;
      align-self: center;

      video {
        width: 100%;
        border-radius: 8px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 80px 0;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      flex-direction: row;

      .projectDescription {
        padding: 0px 16px 24px 16px;
        max-width: 400px;
        align-self: center;
        text-align: left;
        width: 100%;

        .tags {
          justify-content: flex-start;
        }

        h3,
        h4 {
          text-align: left;
        }

        p {
          text-align: left;
        }
      }

      .projectMain {
        position: relative;
      }

      .gameSelect{
        margin-top: 42px;
      }

      .webcamRoot{
        position: relative;
        width: 506px;
        height: 330px;
        video {
          position: absolute;
          top: -25px;
          width: 627px;
          left: -71px;
        }
      }

      .no_camera{
        background: #000;
        position: absolute;
        top: 0;
        width: 508px;
        height: 330px;
        left: 0;
      }

      .gameSelectLogo{
        position: absolute;
        width: 100px;
        bottom: 0;
        left: 30%;
        z-index: 1;
      }
    }
  }
}
</style>
