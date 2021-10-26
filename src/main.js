import Vue from 'vue/dist/vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Home from './components/Home'
import Features from './components/Features'
import Album from './components/Album'
import About from './components/About'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/features', component: Features },
  { path: '/album', component: Album },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')

