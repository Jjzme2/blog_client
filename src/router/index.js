import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/main/HomeView.vue";
import PostView from "../views/pages/PostView.vue";
import EmptyFormView from "../components/app/mainElements/forms/EmptyObjectForm.vue";

//  !Delete this as it is only relevant to the development environment
import DevBookView from "../views/other/DevBookView.vue";
import TestView from "../views/other/TestView.vue";

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

  //  !Delete this as it is only relevant to the development environment
  {
    path: "/devbook",
    name: "devbook",
    component: DevBookView,
    meta: {
      title: `${appName} -- DevBook`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },
  {
    path: "/tests",
    name: "tests",
    component: TestView,
    meta: {
      title: `${appName} -- Tests`,
      style: { color: routeColor },
      hideInNav: false,
    },
  },

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

  // New Post View
  {
    path: "/posts/new",
    name: "newPost",
    component: EmptyFormView,
    meta: {
      title: `${appName} -- New Post`,
      style: { color: routeColor },
      hideInNav: true,
    },
  },

  //   New Quote View
  {
    path: "/quotes/new",
    name: "newQuote",
    component: EmptyFormView,
    meta: {
      title: `${appName} -- New Quote`,
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
