import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // <---
import { store } from "./store";
import "@/assets/index.scss";


// Use v-calendar & v-date-picker components

createApp(App).use(router).use(store).mount("#app");
