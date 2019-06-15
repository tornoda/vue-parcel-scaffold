# vue parcel 项目脚手架

这是一个使用 parcel 打包工具配置的 vue 全家桶脚手架

> 旨在封装一个高效开发、方便维护的脚手架

## 使用方法

### 路由守卫

#### 全局路由守卫

直接在`/src/config/router-guards/global.js`里面填写相应的函数即可

#### 组件路由守卫

拿`src/pages/Home.vue`举例：

1. 在`Home.vue`里

```js
<script>
    import useComponentGuards from '/src/router/helper.js'; const Home ={' '}
    {
        // Home component config
    }
    export default useComponentGuards(Home);
</script>
```

2. 新建`/src/config/router-guards/home.js`，为方便后期维护，**建议文件名与组件名相同**。内容如下：

```js
export default {
    beforeRouteEnter(to, from, next) {
        next(vm => {
            /**
             * 这里可以拿到this，即vm
             */
        });
    },

    /**
     * 现有声明路由 "/:name"
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
    }
};
```

## 错误处理

### 统一处理所有错误

一般用于错误的收集和上报

在`/src/config/errorHandlers.js`里指定`uniErrHandler`的回调即可

### 分别处理一类错误

一般用于调试，或者页面错误提示

在`/src/config/errorHandlers.js`里分别指定各类错误回调即可

## 2019.6.15 更新

1. 调整目录结构
2. 增加错误处理逻辑，支持统一处理和分开处理
3. 错误处理分为四类：
    - vue 自身可以俘获到的错误，如渲染错误
    - 全局的网络请求错误
    - 应用中没有处理的异步操作
    - 其他没有处理的错误

## 初版

1. vue
2. vuex
3. vue-router
4. 代码格式化工具 prettier
5. pre-commit 钩子，使用 git 提交 commit 前会自动运行 prettier 工具，保证团队代码风格统一
6. 分离 vue-router 路由守卫，使得维护更加方便
7. 对前端代码架构进行组织, 并提供一些小例子
8. 其他有空再更新
