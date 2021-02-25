<template>
  <div id="nav" class="topnav">
    <router-link to="/">Home</router-link>
    <a href="#portfolio">Portfolio</a>
    <router-link to="/experience">Experience</router-link>
    <router-link to="/contact">Contact</router-link>
    <svg viewBox="0 0 100 80" width="40" height="40" v-on:click="showMenu()">
      <rect width="100" height="10" rx="4" fill="white"></rect>
      <rect y="30" width="100" height="10" rx="4" fill="white"></rect>
      <rect y="60" width="100" height="10" rx="4" fill="white"></rect>
    </svg>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  methods: {
    showMenu() {
      let x = document.getElementById("nav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Favorit Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
