/**
 * 给组件添加路由钩子的方法
 * @param component 不带路由钩子的组件
 * @param guards 声明组件路由钩子的对象
 * @return vue组件配置文件
 * @example 见home组件做法
 */
export const useComponentGuards = (component, guards) => {
    return {
        ...component,
        ...guards
    };
};
