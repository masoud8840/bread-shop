import { createRouter, createWebHistory } from "vue-router";

import Shop from "../views/Shop.vue";
import ContactUs from "../views/ContactUs.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    redirect: "/shop",
  },
  {
    path: "/shop",
    component: Shop,
  },
  {
    path: "/contact",
    component: ContactUs,
  },
  {
    path: "/cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
