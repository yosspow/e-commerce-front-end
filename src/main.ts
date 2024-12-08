import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { BootstrapVue3 } from "bootstrap-vue-3";
import Pagination from "./components/Pagination.vue";

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; 

const app = createApp(App);
app.component('pagination',Pagination)
app.use(ElementPlus);
app.use(BootstrapVue3);
app.use(router);
app.mount("#app");
