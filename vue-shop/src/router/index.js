import { createRouter, createWebHistory } from 'vue-router'
import BoltView from '../views/BoltView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'bolt',
      component: BoltView
    },
    {
      path: '/kosar',
      name: 'kosar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/KosarView.vue')
    },
    {
      path: '/ujtermek',
      name: 'ujtermek',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UjTermekView.vue')
    }
  ]
})

export default router
