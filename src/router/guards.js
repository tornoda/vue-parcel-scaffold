/**
 * 这里声明全局路由守卫钩子
 */
const beforeEach = (to, from, next) => {
    // do some stuff
    next();
};

// 所有的子组件和异步组件加载完后调用
const beforeResolve = (to, from, next) => {
    // do some stuff
    next();
};

const afterEach = (to, from) => {
    // do some stuff
};

export default (router) => {
    router.beforeEach(beforeEach);
    router.beforeResolve(beforeResolve);
    router.afterEach(afterEach)
}