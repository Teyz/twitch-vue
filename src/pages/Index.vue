<template>
  <section class="body">
    <Wrapper title="Home">
      <MainTitle />
      <Stickers />
    </Wrapper>
    <Wrapper title="AboutMe" size="small" id="aboutme">
      <About />
    </Wrapper>
    <Wrapper title="Portfolio" size="small" id="portfolio">
      <PortfolioItem
        animation
        title="creativete"
        image="/img/portfolio/creativete.png"
        text="Creation d'un site wordpress sur mesure pour Creativ ete"
        url="https://creativete.rivp.fr/"
      />
    </Wrapper>
    <Wrapper title="Portfolio" size="small">
      <PortfolioItem
        title="brawks"
        image="/img/portfolio/brawks.png"
        text="Creation d'api et Bot pour le streamer Brawks"
        url="brawks"
      />
    </Wrapper>
    <Wrapper title="Experience" size="medium">
      <ExperiencesList />
    </Wrapper>
    <Wrapper title="Contact" size="regular">
      <Contact />
    </Wrapper>
  </section>
</template>

<script>
import MainTitle from "./Index/MainTitle";
import Stickers from "./Index/Stickers";
import PortfolioItem from "./Index/PortfolioItem";
import ExperiencesList from "./Index/ExperiencesList";
import About from "./Index/About";
import Contact from "./Index/Contact";
export default {
  name: "Index",
  components: {
    MainTitle,
    Stickers,
    PortfolioItem,
    ExperiencesList,
    About,
    Contact,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
