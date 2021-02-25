<template>
  <section class="body">
    <Wrapper title="Home">
      <MainTitle />
      <Stickers />
    </Wrapper>
    <Wrapper title="AboutMe" size="small">
      <PortfolioItem
        title="creativete"
        image="/img/portfolio/creativete.png"
        text="Creation of a contest website for rivp."
      />
    </Wrapper>
    <Wrapper title="Portfolio" size="small">
      <PortfolioItem
        title="creativete"
        image="/img/portfolio/creativete.png"
        text="Creation of a contest website for rivp."
      />
    </Wrapper>
    <Wrapper title="Portfolio" size="small">
      <PortfolioItem
        title="brawks"
        image="/img/portfolio/brawks.png"
        text="Web development for Brawks."
        url="/brawks"
      />
    </Wrapper>
    <Wrapper title="Experience" size="medium">
      <ExperiencesList />
    </Wrapper>
  </section>
</template>

<script>
import MainTitle from "./Index/MainTitle";
import Stickers from "./Index/Stickers";
import PortfolioItem from "./Index/PortfolioItem";
import ExperiencesList from "./Index/ExperiencesList";
export default {
  name: "Index",
  components: { MainTitle, Stickers, PortfolioItem, ExperiencesList },
  mounted() {
    this.bgGenerate();
  },
  methods: {
    bgGenerate() {
      let spaccing = 179;
      const sectionWrapper = document.querySelector(".wrapperRoot");
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
