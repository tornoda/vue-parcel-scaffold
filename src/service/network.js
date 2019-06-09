class Network {
    constructor() {
        /**
         * 可以根据打包环境来动态配置
         */
        this.baseUrl = "https://jsonplaceholder.typicode.com";
    }

    getFullUrl(url, params) {
        /**
         * 根据需求自己书写
         */
        let tempParam = "?";
        let paramsUrl = "";
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
                console.log("全局处理网络请求错误", err);
                return Promise.reject(err)
            });
    }
}

export default new Network();
