import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { Wrapper } from "./components";
import Toast from "vue-toastification";
import Camera from "simple-vue-camera";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

createApp(App)
  .use(router)
  .use(Toast)
  .component("Wrapper", Wrapper)
  .component("camera", Camera)
  .mount('#app')
