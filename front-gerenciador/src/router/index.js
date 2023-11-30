import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import PainelView from '../views/DashView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AuthView
  },
  {
    path: '/painel',
    name: 'painel',
    component: PainelView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
