import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Contact from '@/pages/Contact.vue';
import Terms from '@/pages/Terms.vue';
import Privacy from '@/pages/Privacy.vue';
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
    path: '/terms',
    name: 'Terms of service',
    component: Terms
  },
  {
    path: '/privacy',
    name: 'Privacy Policy',
    component: Privacy
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
