<template>
  <section class="ourClientsRoot">
    <div class="container">
      <Title title="Clients who trust me" i18nKey="client"/>
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
import Title from "./Title";
import OurClientsItem from "./OurClientsItem";
import getData from "./OurClientList";
export default {
  name: "OurClients",
  components: {
    OurClientsItem,
    Title,
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
  margin-bottom: 40px;
  .container {
    .titleRoot {
      background-color: transparent;
    }

    .clientsSlider {
      .clientSliderList {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 80px;

    .clientsSlider {
      .clientSliderList {
        flex-direction: row !important;
      }
    }
  }
}
</style>
