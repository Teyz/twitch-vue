<template>
  <select v-model="$i18n.locale">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale.value">
      {{locale.flag}}
    </option>
  </select>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return { locales: [{flag:"🇫🇷", value: 'fr'}, {flag: "🇬🇧", value: 'en'}] };
  }
};
</script>

<style lang="scss" scoped>
    select{
        margin-right: 32Px;
    }
</style>