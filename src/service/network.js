class Network {
    constructor() {
        /**
         * 可以根据打包环境来动态配置
         */
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
        this.errorHandler = () => {};
    }

    getFullUrl(url, params) {
        /**
         * 根据需求自己书写
         */
        let tempParam = '?';
        let paramsUrl = '';
        if (params) {
            for (let key in params) {
                const val = params[key];
                tempParam += `${JSON.stringify(key)}=${JSON.stringify(val)}&`;
            }

            paramsUrl = tempParam.slice(0, -1);
        }
        return `${this.baseUrl}/${url}${paramsUrl}`;
    }

    /**
     * get请求
     * @param {string} url不带域名的地址
     * @param {object} params查询参数
     * @returns {promise} 请求的promise
     * @example
     * // 如果要请求https://jsonplaceholder.typicode.com/todos/1?demo=foo&foo=bar
     * // 可以network.get("todos/1", {
     * //     demo: "foo",
     * //     foo: "bar"
     * // })
     */
    get(url, params) {
        const fullUrl = this.getFullUrl(url, params);
        return fetch(fullUrl)
            .then(res => res.json())
            .catch(err => {
                /**
                 * 局部网络错误处理
                 */
                this.errorHandler();
                return Promise.reject(err);
            });
    }

    /**
     * 设置网络失败处理回调
     * @param {function} errorHandler 错误回调
     */
    setErrorHandler(errorHandler) {
        this.errorHandler = errorHandler;
    }

    // TODO 设置请求响应拦截器
    // TODO 设置全局请求头信息
    // TODO 设置局部请求头信息
}

const network = new Network();
export default network;
