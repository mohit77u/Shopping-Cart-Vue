import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import ProductTemplate from './components/ProductTemplate.vue'


Vue.use(VueRouter);

const routes= [

  {path:'/', component: Home },
  {path:'/product/:name', name:'ProductTemplate', component: ProductTemplate, props: true },
]
const router= new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
    