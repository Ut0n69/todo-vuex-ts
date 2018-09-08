import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/list",
      name: "list",
      component: () => import("./pages/List.vue"),
    },
    {
      path: "/input",
      name: "input",
      component: () => import("./pages/Input.vue"),
    },
  ],
});
