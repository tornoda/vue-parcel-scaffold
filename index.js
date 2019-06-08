import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./src/App.vue";
import createStore from "./src/store/index";
import createRouter from "./src/router"
import useGlobalGuards from "./src/router/guards"

Vue.use(Vuex);
Vue.use(VueRouter);

const store = createStore();
const router = createRouter();

/**
 * 使用全局钩子
 */
useGlobalGuards (router);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");
