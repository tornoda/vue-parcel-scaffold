import network from '../service/network';
import Vue from 'vue';

class ErrorHandler {
    constructor() {
        this.vueErrHandler = [];
        this.networkErrHandler = [];
        this.unRejectedHandler = [];
        this.otherErrHandler = [];
    }

    /**
     * 派发一个handler
     * @param {array} name 某种错误处理的方法数组
     * @param {function} handler
     */
    _dispatchHandler(name, handler) {
        name.push(handler);
    }

    /**
     * 统一设置所有的错误处理
     * @param handler 错误回调
     */
    _dispatchUniHandler(handler) {
        this._dispatchHandler(this.vueErrHandler, handler);
        this._dispatchHandler(this.networkErrHandler, handler);
        this._dispatchHandler(this.unRejectedHandler, handler);
        this._dispatchHandler(this.otherErrHandler, handler);
    }

    /**
     * 获取错误队列
     * @param {array} name 错误处理队列
     * @example this._getHandler(this.vueErrHandler)
     */
    _getHandlers(name) {
        if (!this._hasHandler(name)) return;
        return function() {
            for (let handler of name) {
                handler();
            }
        };
    }

    /**
     * 判断是否为空队列
     * @param {array} name 回调队列名
     */
    _hasHandler(name) {
        return name.length !== 0;
    }

    /**
     * 用于绑定全局渲染错误到Vue
     * @param {function} handler 处理错误回调
     */
    _useGlobalVueErrorHandler() {
        Vue.config.errorHandler = this._getHandlers(this.vueErrHandler);
    }

    /**
     * 用于绑定全局网络请求错误到应用
     * @param {function} handler 网络请求错误回调
     */
    _useGlobalNetworkErrorHandler() {
        network.setErrorHandler = this._getHandlers(this.networkErrHandler);
    }

    /**
     * 用于绑定全局未处理的promise错误
     */
    _useGlobalUnRejectedHandler() {
        window.addEventListener('unhandledrejection', this._getHandlers(this.unRejectedHandler));
    }

    /**
     * 用于绑定其他错误处理
     */
    _useGlobalOtherErrorHandler() {
        window.addEventListener('error', this._getHandlers(this.otherErrHandler));
    }

    /**
     * 设置错误回调
     * @param {object | function} cbs 如果是object则分开设置，如果是function则统一设置成同一个handler回调
     * @param {function=} cbs.vueErrHandler vue框架俘获到的错误回调，如渲染错误
     * @param {function=} cbs.networkErrHandler network service 网络请求俘获到的错误回调
     * @param {function=} cbs.unRejectedHandler 其他没有处理的异步错误回调
     * @param {function=} cbs.otherErrHandler window俘获到的其他的错误，如语法错误等
     */
    setErrHandler(cbs) {
        const isFunction = typeof cbs === 'function';
        if (isFunction) {
            this._dispatchUniHandler(cbs);
            return;
        }
        const { vueErrHandler, networkErrHandler, unRejectedHandler, otherErrHandler } = cbs;

        vueErrHandler && this._dispatchHandler(this.vueErrHandler, vueErrHandler);
        networkErrHandler && this._dispatchHandler(this.networkErrHandler, networkErrHandler);
        unRejectedHandler && this._dispatchHandler(this.unRejectedHandler, unRejectedHandler);
        otherErrHandler && this._dispatchHandler(this.otherErrHandler, otherErrHandler);
    }

    /**
     * 用于统一绑定所有错误处理
     */
    useErrHandler() {
        this._hasHandler(this.vueErrHandler) && this._useGlobalVueErrorHandler();
        this._hasHandler(this.networkErrHandler) && this._useGlobalNetworkErrorHandler();
        this._hasHandler(this.unRejectedHandler) && this._useGlobalUnRejectedHandler();
        this._hasHandler(this.otherErrHandler) && this._useGlobalOtherErrorHandler();
    }
}

export default new ErrorHandler();
