import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const lazyPage = (name) => () => import(`../pages/${name}.vue`)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: lazyPage('About')
    }
  ]
})

export default router
