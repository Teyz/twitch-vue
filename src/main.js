import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { Wrapper } from "./components";
import { Breadcrumbs } from "./components";

createApp(App).use(router)
  .component("Wrapper", Wrapper)
  .component("Breadcrumbs", Breadcrumbs)
  .mount('#app')
