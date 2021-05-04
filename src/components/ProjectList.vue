<template>
  <section class="projectListRoot">
    <div class="container">
      <ProjectListItem
        v-for="project in projectList"
        :key="project.name"
        :img="project.src"
        :name="project.name"
        :description="project.description"
        :tags="project.tags"
      />
    </div>
  </section>
</template>

<script>
import ProjectListItem from "./ProjectListItem";
import getData from "./ProjectList";
export default {
  name: "ProjectList",
  components: { ProjectListItem },
  setup() {
    const projectList = getData;
    return {
      projectList,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectListRoot {
  width: 100%;
  @media screen and (min-width: 1024px) {
    padding: 80px 0;
    .container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 24px;
    }
  }
}
</style>
