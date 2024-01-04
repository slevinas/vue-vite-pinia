import { createRouter } from 'vue-router'
import Cart from '../pages/cart/Cart.vue'
import Homepage from '../pages/home/Home.vue'
import SignIn from '../pages/sign-in/SignIn.vue'
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
]
export default function (history) {
  return createRouter({
    history,
    routes
  })
}