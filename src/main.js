import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../src/components/Hello'
import Login from '../src/components/Login'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/login', component: Login }
]

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const router = new VueRouter({
  routes
})
