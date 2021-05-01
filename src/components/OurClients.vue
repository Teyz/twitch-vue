<template>
  <section class="ourClientsRoot">
    <div class="container">
      <div class="titleContent">
        <h3>Clients who trust me</h3>
      </div>
      <div class="clientsSlider">
        <ul class="clientSliderList">
          <li v-for="item in listItem" :key="item.link">
            <OurClientsItem :img="item.src" :link="item.link" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import OurClientsItem from "./OurClientsItem";
import getData from "./OurClientList";
export default {
  name: "OurClients",
  components: {
    OurClientsItem,
  },
  setup() {
    const listItem = getData;
    return {
      listItem,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ourClientsRoot {
  width: 100%;
  @media screen and (min-width: 1024px) {
    padding: 80px 0;

    h3 {
      font-size: 24px;
      line-height: 120%;
    }

    .clientsSlider {
      .clientSliderList {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
