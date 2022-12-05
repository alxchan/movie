import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Login from "../view/Login.vue";
import Shop from "../view/Shop.vue"

const routes = [
  {
    path: '/login',
    component: Login
  },

  {
    path: '/',
    component: Home,
  },

  {
    path: '/shop',
    component: Shop,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to,from,next) => {
//   if (to.meta.authRequired && auth.currentUser){
//     next();
//   }
//   else{
//     console.log(auth.currentUser)
//     router.push("./error")
//     alert("You are not logged in.")
//   }
// })

export default router;