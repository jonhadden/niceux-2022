import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About/About.vue')
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/Work/Work.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
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
