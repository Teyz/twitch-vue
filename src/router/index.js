import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import Brawks from '@/pages/Brawks.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/brawks',
    name: 'Brawks',
    component: Brawks
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
