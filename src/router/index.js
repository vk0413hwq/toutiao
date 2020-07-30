import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入home组件
import Home from '../views/Home.vue'

// insatll方法混入vue实例
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载  还有一种pormise模式
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

// axios没有install方法混入，没法实例
const router = new VueRouter({
  // 默认用hash模式 路径   不用history
  base: process.env.BASE_URL,
  routes
})

export default router
