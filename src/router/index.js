import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Testing.vue";
import Movie from "../view/Movie.vue";

const routes = [
  {
    path: '/register',
    component: Home
  },
  {
    path: '/home',
    component: Movie
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;