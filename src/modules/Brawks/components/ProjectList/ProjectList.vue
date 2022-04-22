<template>
  <section class="projectListRoot">
    <div class="container">
      <ProjectListItem
        v-for="(project, index) in projectList"
        :key="index"
        :img="project.img"
        :size="project.size"
        :name="project.name"
        :description="project.description"
        :tags="project.tags"
        :index="project.index"
        :i18nKey="project.key"
        :project="project.project"
        @setIndex="getIndex"
      />
    </div>
    <template
      v-for="(project, index) in projectList"
      :key="'ProjectDetailsIndex-' + index"
    >
      <ProjectDetail
        :name="project.name"
        :concept="project.concept"
        :description="project.description"
        :link="project.link"
        :tags="project.tags"
        :index="index"
        :i18nKey="project.key"
        :project="project.project"
        v-if="activeIndex === index"
      />
    </template>
  </section>
</template>

<script>
import ProjectListItem from "./ProjectListItem";
import getData from "./data.js";
import ProjectDetail from "./ProjectDetail";
import { ref } from "vue";
export default {
  name: "ProjectList",
  components: { ProjectListItem, ProjectDetail },
  setup() {
    const projectList = getData;
    const activeIndex = ref(0);

    const getIndex = (value) => {
      activeIndex.value = value;
    };

    return {
      projectList,
      getIndex,
      activeIndex,
    };
  },
};
</script>
<style scoped lang="scss">
.projectListRoot {
  width: 100%;
  .container {
    padding: 80px 0;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 16px;
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    .container {
      grid-template-columns: repeat(3, 300px) !important;
      grid-template-rows: inherit;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
}
</style>
