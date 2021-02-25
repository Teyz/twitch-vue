<template>
  <div id="nav" class="topnav">
    <router-link to="/">Home</router-link>
    <a href="/#portfolio">Portfolio</a>
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
  mounted() {
    this.bgGenerate();
  },
  methods: {
    showMenu() {
      let x = document.getElementById("nav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    },
    bgGenerate() {
      let spaccing = 179;
      const sectionWrapper = document.querySelector("body");
      for (let i = 0; i < 7; i++) {
        let verticalDivider = document.createElement("div");
        verticalDivider.classList.add("verticalDivider");
        verticalDivider.style.left = spaccing + "px";
        if (spaccing > 179) {
          verticalDivider.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
        sectionWrapper.appendChild(verticalDivider);
        spaccing += 179;
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
