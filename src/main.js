import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VueSelect from "vue-select";
import Toggle from "@vueform/toggle";
import "./assets/main.css";
import "vue-select/dist/vue-select.css";
import "@vueform/toggle/themes/default.css";
import CirclePacking from "@/components/CirclePacking.vue";

import { defineCustomElement } from 'vue'

const BottlenecksVisualizations = defineCustomElement(CirclePacking)

customElements.define('bottlenecks-visualizations', BottlenecksVisualizations)

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("v-select", VueSelect);
app.component("v-toggle", Toggle);

app.mount("#app");

