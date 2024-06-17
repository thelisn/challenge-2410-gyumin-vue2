import Vue from "vue";
import VueRouter from "vue-router";
import FeedView from "@/pages/FeedView.vue";
import WriteView from "@/pages/WriteView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Feed",
      component: FeedView,
    },
    {
      path: "/write",
      name: "Write",
      component: WriteView,
    },
  ],
});

export default router;
