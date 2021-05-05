<template>
  <section class="projectListRoot">
    <div class="container">
      <ProjectListItem
        v-for="project in projectList"
        :key="project.index"
        :img="project.img"
        :name="project.name"
        :description="project.description"
        :tags="project.tags"
        :index="project.index"
        @setIndex="getIndex"
      />
    </div>
    <ProjectDetail />
  </section>
</template>

<script>
import ProjectListItem from "./ProjectListItem";
import getData from "./data.js";
import ProjectDetail from "./ProjectDetail";
export default {
  name: "ProjectList",
  components: { ProjectListItem, ProjectDetail },
  methods: {
    getIndex(value) {
      console.log(value);
    },
  },
  setup() {
    const projectList = getData;
    return {
      projectList,
    };
  },
};
</script>
<style scoped lang="scss">
.projectListRoot {
  width: 100%;
  @media screen and (min-width: 1024px) {
    .container {
      padding: 80px 0;
      display: grid;
      grid-template-columns: repeat(3, 300px);
      align-items: center;
      justify-items: center;
      justify-content: center;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
