import Vue from 'vue'
import VueRouter from 'vue-router'
import NavigationView from '../views/NavigationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navigation',
    component: NavigationView
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/dashb',
    name: 'dashboard',
    component: () => import('../views/HeaderView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
