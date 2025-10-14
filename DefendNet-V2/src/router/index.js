import { createRouter, createWebHistory } from "vue-router";
import { defRoutes } from "./defRoutes.js";
// import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
// import contact from "../views/contact.vue";
// import services from "../views/services.vue";
// import career from "../views/career.vue";
const routes = [...defRoutes]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;
