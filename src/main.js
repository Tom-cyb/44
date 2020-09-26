import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Form, Field, Button } from "vant";
import "vant/lib/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
import preview from "vue-photo-preview";
import "vue-photo-preview/dist/skin.css";
import htmlToPdf from "./components/htmlToPdf";
Vue.use(htmlToPdf);
Vue.use(preview);
Vue.use(ElementUI);
import echarts from "echarts";

Vue.prototype.echarts = echarts;
Vue.use(echarts);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
