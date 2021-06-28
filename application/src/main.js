import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import InputText from "primevue/inputtext";
import Button from 'primevue/button';




import { createRouter, createWebHashHistory } from "vue-router";
import Socketio from "./plugins/scoket.io";
import Quiz from "./containers/Quiz";
import Home from "./containers/Home";
const app = createApp(App);
app.use(PrimeVue, { inputStyle: "filled" });

const routes = [
  { path: "/", component: Home, meta: { transition: "slide-left" } },
  { path: "/quiz", component: Quiz, meta: { transition: "slide-left" } },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(Socketio, {
  connection: "http://localhost:4000",
  options: {
    // Your Socket.io options here
  },
});
app.use(router);



//import components
app.component('Button', Button);
app.component("InputText", InputText);




app.mount("#app");
