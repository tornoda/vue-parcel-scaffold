import Vue from "vue";
import Vuex from "vuex";
import App from "./src/App.vue";
import createStore from "./src/store/index";

Vue.use(Vuex);
const store = createStore();

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");
