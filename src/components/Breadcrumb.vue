<template>
  <div class="breadcrumbRoot">
    <div class="breadcrumbMain">
      <a href="/">Home</a>
      <span> / </span>
      <span>{{ urlPath }}</span>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  name: "Breadcrumb",
  components: {},
  setup() {
    const router = useRoute();
    const urlPath = ref(router.path);
    urlPath.value = urlPath.value.substring(1);

    return {
      urlPath,
    };
  },
};
</script>

<style scoped lang="scss">
.breadcrumbRoot {
  background-color: #18181b !important;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
  display: flex;
  align-items: center;
  width: 100%;
  .breadcrumbMain {
    padding: 16px 40px;
    font-size: 20px;

    a {
      color: #a970ff;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      color: #efeff1;
      text-transform: capitalize;
    }
  }
}
</style>
