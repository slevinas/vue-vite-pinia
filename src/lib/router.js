import { createRouter } from 'vue-router'
import Cart from '../pages/cart/Cart.vue'
import Homepage from '../pages/home/Home.vue'
import SignIn from '../pages/sign-in/SignIn.vue'

import TestView from '../pages/test/TestView.vue'


const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/sign-in/',
    component: SignIn
  },
  {
    path: '/cart/',
    component: Cart
  },
  {
    path: '/test/',
    component: TestView
  },
]
export default function (history) {
  return createRouter({
    history,
    routes
  })
}