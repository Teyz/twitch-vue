import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { Wrapper } from "./components";
import Toast from "vue-toastification";
import Camera from "simple-vue-camera";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { messages } from './translations';
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
      // set locale
    locale: 'en',
    // set locale messages
    messages
})

createApp(App)
  .use(router)
  .use(Toast)
  .use(i18n)
  .component("Wrapper", Wrapper)
  .component("camera", Camera)
  .mount('#app')