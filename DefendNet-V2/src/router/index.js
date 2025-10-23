import { createRouter, createWebHistory } from "vue-router";
import { defRoutes } from "./defRoutes.js";
import { servicesRoutes } from "./servicesRoutes.js";

const routes = [...defRoutes,...servicesRoutes]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;
