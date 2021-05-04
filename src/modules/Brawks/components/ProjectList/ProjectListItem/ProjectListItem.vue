<template>
  <div class="projectListItemRoot">
    <div class="container">
      <img :src="img" alt="" />
      <h3>{{ name }}</h3>
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
  },
  setup(props) {
    let tags = props.tags;
    tags = tags.split(", ");
    console.log(tags);
    return {
      tags,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectListItemRoot {
  width: 250px;
  border-radius: 3px;
  position: relative;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.1);

  .container {
    padding: 24px 16px;
    img {
      width: 100%;
    }
    h3 {
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
