import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'G-NYYLMX0KWE'
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
