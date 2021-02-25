<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">CropChat</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">CropChat</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" v-on:click="hideMenu"
          >Home</router-link
        >
        <router-link
          class="mdl-navigation__link"
          to="/post"
          v-on:click="hideMenu"
          >Post a picture</router-link
        >
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    hideMenu: function() {
      document
        .getElementsByClassName("mdl-layout__drawer")[0]
        .classList.remove("is-visible");
      document
        .getElementsByClassName("mdl-layout__obfuscator")[0]
        .classList.remove("is-visible");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
