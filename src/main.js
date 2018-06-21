// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Login from './Login'
import Profile from './Profile'
Vue.use(VueRouter)
Vue.config.productionTip = false



/* eslint-disable no-new */

const Home = { template: App }
const LoginPage = { template: LoginPage }

const routes = [
  { path: '/', component: App },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile }

]
const router = new VueRouter({
  routes // short for `routes: routes`
})
/* eslint-disable no-new */
const app = new Vue({
  router
}).$mount('#app2')
