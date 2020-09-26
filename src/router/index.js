import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../page/login"),
  },
  {
    path: "/exval",
    name: "exval",
    component: () => import("../page/exval"),
  },
  {
    path: "/echars",
    name: "echars",
    component: () => import("../page/echars"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
