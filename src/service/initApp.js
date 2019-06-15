import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from '../App';
import createStore from '../store/index';
import createRouter from '../router';
import useGlobalGuards from '../config/router-guards/global';
import errorHandler from '../service/errorHandler';
import uniErrHandler, {
    vueErrHandler,
    networkErrHandler,
    unRejectedHandler,
    otherErrHandler
} from '../config/errorHandlers';

export const init = () => {
    Vue.use(Vuex);
    Vue.use(VueRouter);

    const store = createStore();
    const router = createRouter();

    /**
     * 使用全局路由钩子
     */
    useGlobalGuards(router);

    /**
     * 统一设置错误处理，如收集上报
     */
    errorHandler.setErrHandler(uniErrHandler);

    /**
     * 单独设置错误处理，如Toast页面展示
     */
    errorHandler.setErrHandler({
        vueErrHandler,
        networkErrHandler,
        unRejectedHandler,
        otherErrHandler
    });

    /**
     * 上面设置了，记得一定要调用
     */
    errorHandler.useErrHandler();

    new Vue({
        store,
        router,
        render: h => h(App)
    }).$mount('#app');
};

export default init;
