<template>
  <section class="commandsRoot">
    <div class="inner">
      <button class="btn btn-primary" v-on:click="postCommand(command)">
        {{ name }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Commands",
  props: {
    name: {
      type: String,
      default: "",
    },
    command: {
      type: String,
      default: "",
    },
  },
  setup() {
    const postCommand = async (command) => {
      const res = await fetch(
        "https://cdn.teyz.fr:7000/" + command + "/brawks/kill/"
      );
    };
    return {
      postCommand,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.commandsRoot {
  padding: 24px;
}
</style>
