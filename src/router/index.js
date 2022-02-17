import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import ContactUs from "../views/ContactUs.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/contact",
    component: ContactUs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
