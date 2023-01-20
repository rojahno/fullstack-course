import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/calculator",
      name: "Calculator",
      component: () => import("../views/Calculator.vue"),
    },
    {
      path: "/form",
      name: "Form",
      component: () => import("../views/Form.vue"),
    },
  ],
});

export default router;
