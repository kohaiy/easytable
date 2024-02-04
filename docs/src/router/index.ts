import { createRouter, createWebHashHistory } from 'vue-router'
import routerConfig from './router.config'

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: routerConfig,
})

export default router
