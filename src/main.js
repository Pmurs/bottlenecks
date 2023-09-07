import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueSelect from "vue-select";
import Toggle from "@vueform/toggle";
import "./assets/main.css";
import "vue-select/dist/vue-select.css";
import "@vueform/toggle/themes/default.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-select", VueSelect);
app.component("v-toggle", Toggle);

app.mount("#app");
