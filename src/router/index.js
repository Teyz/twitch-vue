import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory(),
  routes
})

export default router
