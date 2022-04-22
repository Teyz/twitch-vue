<template>
  <section class="projectListItemRoot">
    <div class="container">
      <img :src="img" alt="" />
      <div>
        <h4>{{ name }}</h4>
      </div>
      <div><p class="author">{{ $t("utils.created")}}</p></div>
      <div>
        <p>{{ $t(`${i18nKey}.description`) }}</p>
      </div>
      <div class="tags">
        <div class="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectListItem",
  props: {
    img: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
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
    console.log(props.i18nKey);
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
  .container {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1),
      0 1px 8px -3px rgba(0, 0, 0, 0.02), 0 2px 16px 0 rgba(0, 0, 0, 0.04) !important;
    transition: box-shadow 0.3s ease-in-out;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    padding: 24px 10px;

    &:hover {
      box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1),
        0 1px 16px -3px rgba(0, 0, 0, 0.02), 0 2px 32px 0 rgba(0, 0, 0, 0.04) !important;
    }

    img {
      width: 60px;
    }

    div {
      margin: 8px 8px 0 8px;
    }

    h4 {
      color: #9146ff;
      font-size: 18px;
      font-weight: 600;
      line-height: 120%;
      margin-bottom: 10px;
    }

    .author {
      color: #6e6779;
    }

    p {
      line-height: 1.5;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .tag {
        border-radius: 4px;
        border: 1px solid #dad8de;
        background-color: #faf9fa;
        color: #19171c;
        padding: 4px 12px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
  }
}
</style>
