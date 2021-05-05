<template>
  <div class="projectListItemRoot" v-on:click="setIndex">
    <div class="container">
      <img :src="img" alt="" />
      <h2>{{ name }}</h2>
      <p class="author">Created by Teyz</p>
      <p>{{ description }}</p>
      <div class="tags">
        <div class="tag" v-for="tag in tags" :key="tag">
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectListItem",
  props: {
    img: {
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
  methods: {
    setIndex() {
      this.$emit("setIndex", this.index);
    },
  },
  setup(props) {
    let tags = props.tags;
    tags = tags.split(", ");

    return {
      tags,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectListItemRoot {
  cursor: default;
  width: 250px;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: $secondary-color;
    transition: background-color 0.1s ease-in-out;
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

  .container {
    padding: 24px 16px;
    img {
      width: 100%;
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

    .tags {
      display: flex;
      align-items: center;
      justify-content: center;

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
  @media screen and (min-width: 1024px) {
    .container {
      img {
        width: 60px;
      }
    }
  }
}
</style>
