import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // <---
import { store } from "./store";
import "@/assets/index.scss";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// Use v-calendar & v-date-picker components

createApp(App)
  .use(router)
  .use(store)
  .use(VueLoading, {
    // props
    // color: #3AAFA9;
  })
  .mount("#app");
