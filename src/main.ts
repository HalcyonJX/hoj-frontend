import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";
import router from "@/router";
import "@arco-design/web-vue/dist/arco.css";
import "@/plugins/axios";
import "@/access";

createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
