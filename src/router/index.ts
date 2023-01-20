import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FormView from "../views/FormView.vue";

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
      component: () => import("../views/FormView.vue"),
    },
  ],
});

export default router;
