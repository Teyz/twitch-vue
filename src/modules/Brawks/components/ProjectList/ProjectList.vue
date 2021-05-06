<template>
  <section class="projectListRoot">
    <div class="container">
      <ProjectListItem
        v-for="(project, index) in projectList"
        :key="index"
        :img="project.img"
        :name="project.name"
        :description="project.description"
        :tags="project.tags"
        :index="project.index"
        @setIndex="getIndex"
      />
    </div>
    <template
      v-for="(project, index) in projectList"
      :key="'ProjectDetailsIndex-' + index"
    >
      <transition name="fade">
        <ProjectDetail
          :name="project.name"
          :description="project.description"
          :link="project.link"
          :tags="project.tags"
          v-if="activeIndex === index"
        />
      </transition>
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

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
