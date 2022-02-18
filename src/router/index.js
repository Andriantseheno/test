import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ProductList from '../views/ProductList.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
   {
    path: '/entana',
    name: 'entana',
    component: ProductList,
    children: [
      {
        path: '',
        name: 'harona',
        component: Cart,
      },
    ],
  },
  {
    path: '/hiditra',
    name: 'hiditra',
    component: Login,
  },
  {
    path: '/hisoratra',
    name: 'hisoratra',
    component: Register,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
