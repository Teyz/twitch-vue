<template>
  <div class="contactTitleRoot">
    <div class="contactTitleMain">
      <h1>{{ title }}</h1>
      <h3>
        {{ $t('contact.text') }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  components: {},
  setup() {},
};
</script>

<style scoped lang="scss">
.contactTitleRoot {
  width: 100%;
  .contactTitleMain {
    margin: 24px 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
    color: #adadb8 !important;

    h1 {
      text-align: left;
      font-family: "Roobert";
      font-weight: 800;
      font-size: 40px !important;
      line-height: 1.2 !important;
    }

    h3 {
      line-height: 1.5;
      font-weight: 600;
      font-size: 20px;
      text-align: left;
      padding-top: 10px;
    }
  }
}
</style>
