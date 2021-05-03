<template>
  <div class="contactFormRoot">
    <div class="contactFormProject">
      <div class="contactLabel">
        <label for="project-name">Give a name of your project</label>
      </div>
      <div class="contactDescription">
        <p>
          Veuillez donner un nom à votre extension. Le nom de votre extension ne
          doit inclure aucun des mots suivants. euillez donner un nom à votre
          extension. Le nom de votre extension ne doit inclure aucun des mots
          suivants.
        </p>
      </div>
      <div class="contactFormInput">
        <input type="text" name="project-name" />
      </div>
    </div>
    <div class="contactFormName">
      <div class="contactLabel">
        <label for="client-name">Give a name of your project</label>
      </div>
      <div class="contactDescription">
        <p>
          Veuillez donner un nom à votre extension. Le nom de votre extension ne
          doit inclure aucun des mots suivants. euillez donner un nom à votre
          extension. Le nom de votre extension ne doit inclure aucun des mots
          suivants.
        </p>
      </div>
      <div class="contactFormInput">
        <input type="text" name="client-name" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  components: {},
  setup() {},
};
</script>

<style scoped lang="scss">
.contactFormRoot {
  margin: 24px 40px;
  flex-grow: 1;
  text-align: left;

  .contactLabel {
    margin-bottom: 12px;
  }

  .contactDescription {
    width: 100%;
    margin-bottom: 12px;
    p {
      line-height: 1.5;
      color: #adadb8;
      font-size: 1.3rem;
    }
  }

  .contactFormInput {
    margin-bottom: 24px;
  }
}
</style>
