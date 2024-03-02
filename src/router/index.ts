import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AccountCreateView from '../views/AccountCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: AccountCreateView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: HomeView
    }
  ]
})

export default router
