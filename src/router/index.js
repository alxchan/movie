import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { userData } from "../store/index.js"
import Home from "../view/Home.vue";
import Login from "../view/Login.vue";
import Shop from "../view/Shop.vue"
import Cart from "../view/Cart.vue";
import Checkout from '../view/Checkout.vue'
import Register from '../view/Register.vue'


const routes = [
  {
    path: '/login',
    component: Login,
  },

  {
    path: '/',
    component: Home,
  },

  {
    path: '/shop',
    component: Shop,
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/checkout',
    component: Checkout,
    meta: {
      authRequired: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,from,next) => {
  const store = userData()
  if (to.meta.authRequired && store.login){
    next();
  }
  else if(!to.meta.authRequired){
    next();
  }
  else{
    // console.log(store.login)
    router.push("./")
    alert("You are not logged in.")
  }
})

export default router;