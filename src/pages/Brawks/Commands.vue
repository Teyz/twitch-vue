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
  data() {
    return {};
  },
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
  methods: {
    async postCommand(command) {
      const res = await fetch(
        "https://cdn.teyz.fr:7000/" + command + "/brawks/kill/"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.commandsRoot {
  padding: 24px;
}
</style>
