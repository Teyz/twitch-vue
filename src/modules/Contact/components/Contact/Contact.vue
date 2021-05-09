<template>
  <section class="contactRoot">
    <ContactTitle
      title="Contact"
      text="Cette page crée votre extension en tant qu'API client, réservant son utilisation à Twitch. Une fois un nom choisi pour l'extension, vous pourrez créer la première version de votre extension. Toutes les informations supplémentaires seront générées automatiquement par notre système. Vous pourrez modifier ces informations ultérieurement depuis la sélection de version de vos extensions. Nous sommes là pour vous."
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
