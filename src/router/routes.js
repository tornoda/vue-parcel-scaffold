import {Home, Demo} from "../pages"

/**
 * 所有的路由声明文件在这里声明
 */
export default [
    {path: "/", redirect: '/home'},
    {path: "/home", component: Home},
    {path: "/demo", component: Demo}
];
