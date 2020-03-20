import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hot'
  },
  {
    path: '/hot',
    component: () => import('@/views/hot')
  },
  {
    path: '/movie',
    component: () => import('@/views/movie')
  },
  {
    path: '/top',
    component: () => import('@/views/top')
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/detail')
  }
]

const router = new VueRouter({
  routes
})

export default router
