import { createRouter, createWebHistory } from "vue-router";
//pages
import Home from "../pages/Home.vue";
import Users from "../pages/Users.vue";
import Movie from "../pages/Movie.vue";
import Page from "../pages/Page.vue";
import Counter from '../pages/Counter.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/users",
    name: "users",
    component: Users,
  },

  {
    path: "/movie",
    name: "movie",
    component: Movie,
  },

  {
    path: "/page",
    name: "page",
    component: Page,
  },

  {
    path: '/counter',
    name: 'counter',
    component: Counter,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
