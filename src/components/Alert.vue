<template>
  <div class="alertRoot">
    <div class="container">
      <Badge text="nouveautés" />
      <h4>Personnaliser votre chaîne</h4>
      <p>
        Mettez votre programme de stream à jour, ajoutez des liens vers vos
        réseaux sociaux et gérez les préférences de votre chaîne
      </p>
    </div>
    <svg version="1.1" viewBox="0 0 20 20" x="0px" y="0px">
      <g>
        <path
          d="M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z"
        ></path>
      </g>
    </svg>
  </div>
</template>

<script>
import Badge from "@/components/Badge";
export default {
  name: "Alert",
  components: { Badge },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.alertRoot {
  background-color: #18181b;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9), 0 0 2px rgba(0, 0, 0, 0.9) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  padding: 24px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    h4 {
      font-size: 18px;
      margin-right: 8px;
    }
    p {
      font-size: 13px;
    }
  }

  svg {
    margin-left: 24px;
    width: 16px;
    height: 16px;
    path {
      fill: #efeff1;
    }
  }
  @media screen and (min-width: 1024px) {
  }
}
</style>
