<template>
  <section class="main">
    <Wrapper>
      <Hero title="Terms of service" />
      <TermsOfService />
    </Wrapper>
  </section>
</template>

<script>
import Hero from "@/components/Hero";
import TermsOfService from "./components/TermsOfService";

export default {
  name: "Terms",
  components: { Hero, TermsOfService },
};
</script>

<style scoped lang="scss"></style>
