<template>
  <div id="nav" class="topnav">
    <a class="nav-item active" href="/#home">Home</a>
    <a class="nav-item" href="/#aboutme">About Me</a>
    <a class="nav-item" href="/#portfolio">Portfolio</a>
    <a class="nav-item" href="/#experiences">Experiences</a>
    <a class="nav-item" href="/#contact">Contact</a>
    <svg viewBox="0 0 100 80" width="40" height="40" v-on:click="showMenu">
      <rect width="100" height="10" rx="4" fill="white"></rect>
      <rect y="30" width="100" height="10" rx="4" fill="white"></rect>
      <rect y="60" width="100" height="10" rx="4" fill="white"></rect>
    </svg>
  </div>
  <router-view />
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "App",
  setup() {
    const showMenu = () => {
      let x = document.getElementById("nav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };
    const bgGenerate = () => {
      const sectionWrapper = document.querySelector("body");
      for (let spaccing = 179; spaccing < window.innerWidth; spaccing += 179) {
        let verticalDivider = document.createElement("div");
        verticalDivider.classList.add("verticalDivider");
        verticalDivider.style.left = spaccing + "px";
        if (spaccing > 179) {
          verticalDivider.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
        sectionWrapper.appendChild(verticalDivider);
      }
    };
    onMounted(() => {
      bgGenerate();
    });
    return {
      showMenu,
    };
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
