import Vue from "vue";
import VueRouter from "vue-router";
import FeedView from "../pages/FeedView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Feed",
      component: FeedView,
    },
  ],
});

export default router;
