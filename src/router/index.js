import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import Courses from "@/components/Courses.vue";
import InternshipProcess from "@/components/InternshipProcess.vue";
import FinishedStep from "@/components/FinishedStep.vue";
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
    props: true,
  },
  {
    path: "/myCourses/:id/:type/:moduleID/:moduleIDID",
    component: Courses,
    props: true,
  },
  {
    path: "/allInternships/:id/",
    component: InternshipProcess,
    props: true,
  },
  {
    path: "/allInternships/:id/:process",
    component: InternshipProcess,
    props: true,
  },
  {
    path: "/allInternships/:id/:process/completed",
    component: FinishedStep,
    props: true,
  },
  {
    path: "/myCourses/:process/completed",
    component: FinishedStep,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
