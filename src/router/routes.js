const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        name: "home",
      },
      {
        path: "/trending",
        component: () => import("pages/TrendingPage.vue"),
        name: "trending",
      },
      {
        path: "/search/:keyword?",
        component: () => import("pages/SearchPage.vue"),
        name: "search",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
