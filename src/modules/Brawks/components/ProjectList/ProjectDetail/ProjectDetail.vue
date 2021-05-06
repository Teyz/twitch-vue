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
        <video v-if="index === 0" autoplay width="600" loop>
          <source src="media/Hardzone.mp4" type="video/mp4" />
        </video>
        <div v-if="index === 1" class="videoContainer">
          <video autoplay width="300" loop>
            <source src="media/Wheel.mp4" type="video/mp4" />
          </video>
        </div>
        <div v-if="index === 2" class="projectApiContainer">
          <div class="apiResult">
            <h3 class="apiCounter">{{ counter }}</h3>
          </div>
          <div class="apiCommands">
            <button class="btn light" v-on:click="addCounterKill">Add</button>
            <button class="btn light" v-on:click="deleteCounterKill">
              Delete
            </button>
            <button class="btn light" v-on:click="resetCounterKill">
              Reset
            </button>
          </div>
          <div class="inputShowUrl">
            <input
              type="text"
              value="http://brawks-counter.teyz.fr/brawks"
              readonly
            />
          </div>
        </div>
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
  },
  setup(props) {
    const counter = ref(0);
    const formatedTags = computed(() => props.tags.split(", "));

    const getCounter = () => {
      const evtSource = new EventSource(
        `http://brawks-counter.teyz.fr/get/brawks/kill`,
        {
          crossDomain: true,
        }
      );

      evtSource.addEventListener("connected", (e) => {
        let data = JSON.parse(e.data);
        counter.value = data.kill;
      });
    };

    const addCounterKill = () => {
      fetch("http://brawks-counter.teyz.fr/put/brawks/kill");
    };

    const deleteCounterKill = () => {
      fetch("http://brawks-counter.teyz.fr/update/brawks/kill");
    };

    const resetCounterKill = () => {
      fetch("http://brawks-counter.teyz.fr/delete/brawks/kill");
    };

    getCounter();

    return {
      formatedTags,
      getCounter,
      counter,
      addCounterKill,
      deleteCounterKill,
      resetCounterKill,
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
        margin-bottom: 10px;
        margin-top: 0;
      }

      p {
        color: white;
        text-align: center;
        line-height: 1.5;
        margin-bottom: 24px;
      }
    }

    .projectMain {
      padding: 24px 16px;
      align-self: center;

      video {
        width: 100%;
        border-radius: 8px;
      }

      .projectApiContainer {
        width: 600px;
        .apiResult {
          .apiCounter {
            color: white;
            font-size: 60px;
            text-align: center;
            font-weight: 800;
            margin-bottom: 24px;
            margin-left: 0;
            width: 100%;
          }
        }
        .apiCommands {
          margin-bottom: 16px;

          button {
            &:last-child {
              margin-right: 0;
            }
          }
        }

        .inputShowUrl {
          position: relative;
          input {
            text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
            color: transparent;
            text-align: center;

            &:focus {
              text-shadow: unset;
              color: white;
            }
          }
        }
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

        h3 {
          text-align: left;
        }

        p {
          text-align: left;
        }
      }

      .projectMain {
        .videoContainer {
          width: 600px;
        }
      }
    }
  }
}
</style>
