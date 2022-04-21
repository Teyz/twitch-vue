import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Contact from '@/pages/Contact.vue';
import Brawks from '@/pages/Brawks.vue';
import Gotaga from '@/pages/Gotaga.vue';
import Terms from '@/pages/Terms.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/brawks',
    name: 'Brawks',
    component: Brawks
  },
  {
    path: '/gotaga',
    name: 'Gotaga',
    component: Gotaga
  },
  {
    path: '/terms',
    name: 'Terms of service',
    component: Terms
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
})

export default router
