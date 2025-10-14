import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import contact from "../views/contact.vue";
import services from "../views/services.vue";
import career from "../views/career.vue";

export const defRoutes = [
   {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/career",
      name: "career",
      component: career,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path:"/services",
      name: "services",
      component:services
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
]