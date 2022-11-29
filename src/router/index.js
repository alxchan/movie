import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Testing.vue";
import Movie from "../view/Movie.vue";
import Login from "../view/Login.vue";
import { auth } from "../firebase/index.js"
import Error from "../view/Error.vue";

const routes = [
  {
    path: '/',
    component: Login
  },

  {
    path: '/register',
    component: Home,
  },

  {
    path: '/home',
    component: Movie,
    meta: {
      authRequired: true,
    }
  },

  {
    path: '/error',
    component: Error
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to,from,next) => {
  if (to.meta.authRequired && auth.currentUser){
    next();
  }
  else{
    console.log(auth.currentUser)
    router.push("./error")
    alert("You are not logged in.")
  }
})

export default router;