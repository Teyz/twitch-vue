import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { Wrapper } from "./components";
import Toast from "vue-toastification";
import VueGtag from "vue-gtag-next";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

createApp(App)
  .use(router)
  .use(Toast)
  .use(VueGtag, {
    property: {
      id: "G-4PF7W26DSM"
    }
  })
  .component("Wrapper", Wrapper)
  .mount('#app')
