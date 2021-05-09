<template>
  <div class="contactFormRoot">
    <form @submit.prevent="sendEmail">
      <div class="contactFormProject">
        <div class="contactLabel">
          <label for="project-name">Give a name of your project</label>
        </div>
        <div class="contactFormInput">
          <input
            type="text"
            name="project-name"
            v-model="projectName"
            required
          />
        </div>
      </div>
      <div class="contactFormName">
        <div class="contactLabel">
          <label for="client-name">Name & Lastname</label>
        </div>
        <div class="contactFormInput">
          <input
            type="text"
            name="client-name"
            v-model="projectClient"
            required
          />
        </div>
      </div>
      <div class="contactFormEmail">
        <div class="contactLabel">
          <label for="client-email">Email</label>
        </div>
        <div class="contactFormInput">
          <input
            type="email"
            name="client-email"
            v-model="projectEmail"
            required
          />
        </div>
      </div>
      <div class="contactFormDescription">
        <div class="contactLabel">
          <label for="client-name">Description</label>
        </div>
        <div class="contactFormInput">
          <textarea
            name="client-description"
            v-model="projectDescription"
            required
          />
        </div>
      </div>
      <button class="btn-form" :disabled="isDisable">
        Continuer
      </button>
    </form>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
export default {
  name: "ContactForm",
  components: {},
  setup() {
    const toast = useToast();
    const projectName = ref("");
    const projectClient = ref("");
    const projectDescription = ref("");
    const projectEmail = ref("");
    const sendEmail = (e) => {
      console.log(
        projectName.value,
        projectClient.value,
        projectDescription.value,
        projectEmail.value
      );
      emailjs
        .sendForm(
          "cdn-teyz",
          "cdn-contact-teyz",
          e.target,
          "user_tcs5iwe4k2fIRxH8ZaI4J",
          {
            project: projectName.value,
            name: projectClient.value,
            description: projectDescription.value,
            email: projectEmail.value,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result);
            toast("Email envoyé !", {
              toastClassName: "teyz",
              position: "top-right",
            });
            resetForm();
          },
          (error) => {
            console.log("FAILED...", error);
            toast.error("Une erreur est survenue", {
              position: "top-right",
            });
            resetForm();
          }
        );
    };

    const isDisable = computed(() => {
      return (
        projectName.value === "" ||
        projectClient.value === "" ||
        projectEmail.value === "" ||
        projectDescription.value === ""
      );
    });

    const resetForm = () => {
      projectName.value = "";
      projectClient.value = "";
      projectEmail.value = "";
      projectDescription.value = "";
    };

    return {
      projectName,
      projectClient,
      projectDescription,
      projectEmail,
      sendEmail,
      isDisable,
      resetForm,
    };
  },
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

  .contactFormInput {
    margin-bottom: 24px;
  }
}
</style>
