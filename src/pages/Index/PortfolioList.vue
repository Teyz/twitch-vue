<template>
  <section class="portfolioListRoot">
    <PortfolioItem
      title="creativete"
      image="/img/portfolio/creativete.png"
      text="Creation of a contest website for rivp."
    />
  </section>
</template>

<script>
import PortfolioItem from "./PortfolioItem";
export default {
  name: "PortfolioList",
  components: { PortfolioItem },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.portfolioListRoot {
}
</style>
