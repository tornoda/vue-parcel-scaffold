export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
           /**
            * 这里可以拿到this，即vm
            */
        });
    },

    /**
     * 声明路由 "/:name"
     * 当"/home" 与 "/about"这样路径切换时，组件会进行复用
     * 此时钩子触发
     */
    beforeRouteUpdate(to, from, next) {
       /**
        * 这里可以拿到this
        * 做任何事情
        */
        next();
    },

    beforeRouteLeave(to, from, next) {
       /**
        * 这里可以拿到this
        * 做任何事情
        */
        next();
    },

};
