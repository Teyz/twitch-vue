<template>
  <section class="body">
    <Wrapper title="Home" size="normal">
      <MainTitle />
      <Stickers />
    </Wrapper>
    <Wrapper title="Portfolio" size="small">
      <PortfolioList />
    </Wrapper>
  </section>
</template>

<script>
import MainTitle from "./Index/MainTitle";
import Stickers from "./Index/Stickers";
import PortfolioList from "./Index/PortfolioList";
export default {
  name: "Index",
  components: { MainTitle, Stickers, PortfolioList },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
