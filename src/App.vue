<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brawks">Brawks</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: "Favorit Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
