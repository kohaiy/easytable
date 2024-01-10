import { createRouter, createWebHistory } from 'vue-router'
import routerConfig from './router.config'

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerConfig,
})

export default router
