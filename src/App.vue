<template>
  <section class="root">
    <nav class="navbar">
      <ul>
        <li>
          <img src="img/logo.svg" alt="" />
        </li>
        <li><a href="">Accueil</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
    <div class="body">
      <router-view />
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: "Inter";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  .root {
    height: calc(100% - 50px);
    .navbar {
      width: 100vw;
      height: 60px;
      background-color: $secondary-color;

      ul {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;

        li {
          font-size: 18px;
          padding: 0 20px;

          a {
            color: #efeff1;
            font-size: 20px;
            line-height: 27px;
            font-family: "Roobert";
            display: flex;
            align-items: center;
            color: #fff;
            text-decoration: none;
            line-height: 1.5;
            font-weight: 500;

            &:hover {
              color: black;
            }
          }

          img {
            height: 32px;
            width: 94px;
            fill: #fff;
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
    .body {
      display: flex;
      height: 100%;
    }
  }
}
</style>
