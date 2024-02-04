import { createRouter, createWebHashHistory } from 'vue-router'
import routerConfig from './router.config'

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(__BASE_URL__),
  routes: routerConfig,
})

export default router
