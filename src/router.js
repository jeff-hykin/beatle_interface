import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/help",
      name: "help",
      // route level code-splitting
      // this generates a separate chunk (help.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Help.vue"),
    },
    {
      path: "/debug",
      name: "debug",
      // route level code-splitting
      // this generates a separate chunk (help.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/Debug.vue"),
    },
  ]
})