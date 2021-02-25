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
      text="J'ai eu un parcours assez classique en commencant par l'optention
      d'un BAC S spe SVT en 2016, puis d'un DUT Informatique en 2018 a l'Universite 
      de Villetaneuse. Changement de cap en 2018 avec un Bachelor Chef de projet multimedia.
      Petite annee de perdition en 2019 avec un echec en Master informatique pour ensuite rebondir avec un mastere developpement web a l'ECV
      Digital Bordeaux."
    />
  </div>
</template>

<script>
import TextSection from "../../components/TextSection";
import TextImageSection from "../../components/TextImageSection";
export default {
  name: "About",
  components: { TextSection, TextImageSection },
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
