import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import Courses from "@/components/Courses.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/myCourses/:id/:type",
    component: Courses,
    props: true
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;