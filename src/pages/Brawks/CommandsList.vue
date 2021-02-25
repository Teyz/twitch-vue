<template>
  <section class="commandsListRoot">
    <div class="inner">
      <Commands name="Add" command="put" />
      <Commands name="Delete" command="update" />
      <Commands name="Reset" command="delete" />
    </div>
  </section>
</template>

<script>
import Commands from "./Commands.vue";
export default {
  components: { Commands },
  name: "CommandsList",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.commandsListRoot {
  padding: 24px;

  .inner {
    @media screen and (min-width: 1024px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
