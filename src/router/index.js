import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Contact from '@/pages/Contact.vue';
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
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
