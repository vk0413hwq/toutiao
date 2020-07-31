import Vue from 'vue'
// 引入vue依赖
import App from './App.vue'
// 引入路由
import router from './router'
// 引入仓库里面的index.js
import store from './store'
// 引入axios
import axios from './common/axios'
// axios没有混入的方法只能通过原型添加
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
