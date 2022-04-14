import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About/About.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work/Work.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/case-study/:slug',
      name: 'CaseStudy',
      component: () => import('../views/CaseStudy/CaseStudy.vue')
    }
  ]
})

export default router
