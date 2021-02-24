import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { Wrapper } from "./components";
import { Breadcrumbs } from "./components";
import VueFullPage from 'vue-fullpage.js'

createApp(App)
  .use(router)
  .use(VueFullPage)
  .component("Wrapper", Wrapper)
  .component("Breadcrumbs", Breadcrumbs)
  .mount('#app')
