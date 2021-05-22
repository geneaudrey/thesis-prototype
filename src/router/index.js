import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import Courses from "@/components/Courses.vue";
import InternshipProcess from "@/components/InternshipProcess.vue";
import FinishedStep from "@/components/FinishedStep.vue";
import Opportunities from "@/components/Opportunities.vue";
import About from "@/components/About.vue";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import Calendar from "@/components/CalendarBig.vue";
import Inbox from "@/components/Inbox.vue";
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
    props: true,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/calendar",
    component: Calendar,
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
    path: "/opportunities/:type/:id",
    component: InternshipProcess,
    props: true,
  },
  {
    path: "/opportunities/:type/:id/:process",
    component: InternshipProcess,
    props: true,
  },
  {
    path: "/opportunities/:type/:id/process/:process",
    component: InternshipProcess,
    props: true,
  },
  {
    path: "/opportunities/:type/:id/process/:process/completed",
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
  {
    path: "/inbox",
    component: Inbox,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
