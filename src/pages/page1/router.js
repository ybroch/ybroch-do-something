import Vue from "vue";
import VueRouter from "vue-router";
import Page1Index from "./page1Index.vue";
import Page1Child from "./page1Child.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/page1.html",
    name: "page1Child",
    component: Page1Index
  },
  {
    path: "/page1-child",
    name: "page1Child",
    component: Page1Child
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
