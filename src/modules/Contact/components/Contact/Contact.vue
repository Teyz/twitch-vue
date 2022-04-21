<template>
  <section class="contactRoot">
    <ContactTitle
      title="Contact"
      text="Do not hesitate to contact me if you have a project or an idea."
    />
    <ContactForm />
  </section>
</template>

<script>
import ContactTitle from "./ContactTitle";
import ContactForm from "./ContactForm";
export default {
  name: "Contact",
  components: { ContactTitle, ContactForm },
  setup() {},
};
</script>

<style scoped lang="scss">
.contactRoot {
  background-color: #0e0e10;
  width: 100%;
}
</style>
