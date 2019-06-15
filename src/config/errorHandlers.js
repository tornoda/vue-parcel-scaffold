/**
 * vue全局页面渲染错误
 */
export const vueErrHandler = (err, vm, info) => {
    console.log('vueErrorHandler');
    // 错误时处理一些东西
};

/**
 * 全局网络错误处理
 * @param {object} err 网络错误时候的回调
 */
export const networkErrHandler = err => {
    console.log('networkErrorHandler');
    // 全局网络错误处理一些东西
};

/**
 *
 * @param {object} err 没有处理的promise错误
 */
export const unRejectedHandler = err => {
    console.log('unRejectedPromiseHandler');
};

/**
 *
 * @param {object} err 其他没有处理的错误，如语法错误，静态资源加载失败
 */
export const otherErrHandler = err => {
    console.log('otherErrorHandler');
};

/**
 *
 * @param {object} err 统一处理以上所有的错误
 */
const uniErrHandler = err => {
    console.log('uniErrorHandler');
    // console.log(err);
    // 比如所有的错误统一上报
};

export default uniErrHandler;
