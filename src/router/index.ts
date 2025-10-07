import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { constantRoute, noFountRoute, policyPageRoute } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: [...constantRoute, noFountRoute, policyPageRoute],
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
