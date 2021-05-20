import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import ProductDetails from '../views/ProductDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/details/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  
  {
    path: '/about',
    name: 'About',
  
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
