import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/main/HomeView.vue";
import PostView from "../views/pages/PostView.vue";

const appName = "ILYTAT Blog";

const routeColor = "#333333";

const routes = [
  // UNAUTHORISED ROUTES
  //   {
  //     path: "/about",
  //     name: "about Us",
  //     component: () => import("../views/AboutView.vue"),
  //     meta: {
  //       title: `${appName} -- About Us`,
  //       style: { color: routeColor },
  //       hideInNav: false,
  //     },
  //   },

  // AUTHORISED ROUTES
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: `${appName} -- Home`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

  //  All Posts View
  {
    path: "/posts",
    name: "posts",
    component: PostView,
    meta: {
      title: `${appName} -- Posts`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  //   Single Post View
  {
    path: "/posts/:id",
    name: "post",
    component: PostView,
    meta: {
      title: `${appName} -- Post`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
