import { createRouter, createWebHistory } from "vue-router";
import Select from "../views/Select.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: Select,
    },

  ],
});
export default router;
