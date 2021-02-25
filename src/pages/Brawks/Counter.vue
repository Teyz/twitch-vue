<template>
  <section class="counterRoot">
    <div class="inner">
      <div class="counterHeader">
        <h3>Counter : {{ counter }}</h3>
      </div>
      <div class="counterCommands">
        <CommandsList />
      </div>
    </div>
    <router-link to="/">Back To Portfolio</router-link>
  </section>
</template>

<script>
import CommandsList from "./CommandsList.vue";
export default {
  components: { CommandsList },
  name: "Counter",
  data() {
    return {
      counter: {},
    };
  },
  beforeMount() {
    this.getCounter();
  },
  methods: {
    async getCounter() {
      const evtSource = new EventSource(
        "https://cdn.teyz.fr:7000/GET/brawks/kill",
        {
          crossDomain: true,
        }
      );

      evtSource.addEventListener("connected", (e) => {
        let data = JSON.parse(e.data);
        this.counter = data.kill;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.counterRoot {
  padding: 24px;
  position: relative;

  h3 {
    font-family: "Akira";
    font-size: 26px;
    text-transform: uppercase;
  }

  a {
    @media screen and (min-width: 1024px) {
      position: absolute;
      bottom: -70%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
