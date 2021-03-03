<template>
  <div class="aboutRoot">
    <TextSection
      title="Qui suis-je"
      text="Je suis Bastien Rigaud, j'ai 23 ans et je 
      travaille en tant que developpeur web chez Parker and Parker.
      "
    />
    <TextImageSection
      image="img/about/CursusScolaire.png"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <Slider />
  </div>
</template>

<script>
import TextSection from "../../components/TextSection";
import TextImageSection from "../../components/TextImageSection";
import Slider from "./Slider";
export default {
  name: "About",
  components: { TextSection, TextImageSection, Slider },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutRoot {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 80vw;
}
</style>
