import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

import index from '../views/shopCart'

let router = new VueRouter({
  routes:[
    {path:"/",component:index},
    {path:"*",component:index}
  ]
})


export default router;