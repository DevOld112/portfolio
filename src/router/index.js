import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/contact',
      name: 'contacto',
      component: () => import('../views/contact/ContactView.vue'),
    }
  
  ]
})

export default router
