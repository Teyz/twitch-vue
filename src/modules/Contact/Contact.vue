<template>
  <section class="main">
    <Wrapper>
      <Breadcrumb />
      <ContactSection />
    </Wrapper>
  </section>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "./components/Contact";
export default {
  name: "Contact",
  components: { Breadcrumb, ContactSection },
  setup() {},
};
</script>

<style scoped lang="scss"></style>
