import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import Courses from "@/components/Courses.vue";
import InternshipProcess from "@/components/InternshipProcess.vue";
import FinishedStep from "@/components/FinishedStep.vue";
import Opportunities from "@/components/Opportunities.vue";
import About from "@/components/About.vue";
import Login from "@/components/Login.vue";
// import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    component: About,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/:type",
    component: Login,
    props: true
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/:tab/:id/:type",
    component: Courses,
    props: true,
  },
  {
    path: "/:tab/:id/:type/:moduleID/:moduleIDID",
    component: Courses,
    props: true,
  },
  {
    path: "/opportunities/:type/:id/",
    component: InternshipProcess,
    props: true,
  },
  {
    path: "/opportunities/:type/:id/:process",
    component: InternshipProcess,
    props: true,
  },
  {
    path: "/opportunities/:type/:id/:process/completed",
    component: FinishedStep,
    props: true,
  },
  {
    path: "/myCourses/:process/completed",
    component: FinishedStep,
    props: true,
  },
  {
    path: "/opportunities",
    component: Opportunities,
    props: true,
  },
  {
    path: "/opportunities/:type",
    component: Opportunities,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
