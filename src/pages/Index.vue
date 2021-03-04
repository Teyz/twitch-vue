<template>
  <section class="body">
    <Wrapper title="Home" id="home">
      <MainTitle />
      <Stickers />
    </Wrapper>
    <Wrapper title="About Me" size="small" id="aboutme">
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
    <Wrapper title="Portfolio" size="small" id="portfolio">
      <PortfolioItem
        title="brawks"
        image="/img/portfolio/brawks.png"
        text="Creation d'api et Bot pour le streamer Brawks"
        url="brawks"
      />
    </Wrapper>
    <Wrapper title="Experience" size="medium" id="experiences">
      <ExperiencesList />
    </Wrapper>
    <Wrapper title="Contact" size="regular" id="contact">
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
import { onMounted } from "vue";
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
  setup() {
    const scrollAnchor = () => {
      let mainNavLinks = document.querySelectorAll(".nav-item");

      window.addEventListener("scroll", (event) => {
        let fromTop = window.scrollY - 50;

        mainNavLinks.forEach((link) => {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop <= fromTop + 55 &&
            section.offsetTop + section.offsetHeight > fromTop + 55
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    };
    onMounted(() => {
      scrollAnchor();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
