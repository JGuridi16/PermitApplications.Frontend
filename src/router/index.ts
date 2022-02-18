import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import permitRouter from './permit/permit.route'
import NotFoundView from '@/views/common/not-found';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: "homepage",
    component: () => import("../views/home.vue"),
  },
  permitRouter,
  {
    path: "*",
    component: NotFoundView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes
})

export default router
