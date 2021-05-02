<template>
  <section class="projectListRoot">
    <div class="container">
      <Hero
        title="Stories from our Community"
        text="Learn how companies are leveraging Twitch Developer products."
      />
      <ul class="projectListMain">
        <li v-for="project in projectsList" :key="project.link">
          <ProjectListItem
            :img="project.src"
            :link="project.link"
            :text="project.text"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
import ProjectListItem from "./ProjectListItem";
import getData from "./data.js";
export default {
  name: "ProjectList",
  components: {
    Hero,
    ProjectListItem,
  },
  setup() {
    const projectsList = getData;
    return {
      projectsList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectListRoot {
  .heroRoot {
    background-color: transparent;
    padding-top: 0;
  }
  width: 100%;
  position: relative;

  .projectListMain {
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 0 10px 0px 10px;
    }
  }
  @media screen and (min-width: 1024px) {
    padding: 80px 0;
  }
}
</style>
