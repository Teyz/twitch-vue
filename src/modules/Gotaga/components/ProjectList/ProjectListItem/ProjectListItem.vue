<template>
  <div class="projectListItemRoot" v-on:click="setIndex">
    <div class="container">
      <img :src="img" alt="" :class="size" />
      <h2>{{ name }}</h2>
      <p class="author">Created by Teyz</p>
      <p class="description" :class="size">{{ description }}</p>
      <div class="tags">
        <div
          class="tag"
          v-for="(formatedTags, index) in formatedTags"
          :key="index"
        >
          {{ formatedTags }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ProjectListItem",
  props: {
    img: {
      Type: String,
      default: "",
    },
    size: {
      Type: String,
      default: "",
    },
    name: {
      Type: String,
      default: "",
    },
    description: {
      Type: String,
      default: "",
    },
    tags: {
      Type: String,
      default: "",
    },
    index: {
      Type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const formatedTags = computed(() => props.tags.split(", "));

    const setIndex = () => {
      emit("setIndex", props.index);
    };

    return {
      setIndex,
      formatedTags,
    };
  },
  emits: ["setIndex"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectListItemRoot {
  cursor: default;
  width: 250px;
  height: 350px;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: $secondary-color;
    transition: all 0.1s ease-in-out;
    box-shadow: 0 3.4px 2.7px rgba(0, 0, 0, 0.034),
      0 8.7px 6.9px rgba(0, 0, 0, 0.049), 0 17.7px 14.2px rgba(0, 0, 0, 0.061),
      0 36.5px 29.2px rgba(0, 0, 0, 0.076), 0 100px 80px rgba(0, 0, 0, 0.11);

    .container {
      h2,
      p,
      .author {
        color: white;
      }

      .tags {
        .tag {
          background-color: rgba($color: white, $alpha: 0.1);
          border-color: rgba($color: white, $alpha: 0.1);
          color: white;
        }
      }
    }
  }

  .big{
    width: 100% !important;
  }

  .container {
    padding: 24px 16px;
    img {
      width: 60px;

      @media screen and (min-width: 1024px) {
        &.xlImage {
          width: 120px;
        }
      }
    }
    h2 {
      color: $secondary-color;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      margin: 10px 0;
    }
    .author {
      color: #6e6779;
      line-height: 1.5;
      font-size: 12px;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.5;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .description {
      display: -webkit-box;
      max-width: 200px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;

      &.big{
        -webkit-line-clamp: 3;
      }
    }

    .tags {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 24px;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);

      .tag {
        padding: 4px;
        border-radius: 4px;
        border: 1px solid #dad8de;
        background-color: #faf9fa;
        color: #19171c;
        margin: 4px;
        cursor: default;
        font-weight: 600;
      }
    }
  }
}
</style>
