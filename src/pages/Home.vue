<template>
    <div>
        <div>{{count}}</div>
        <div>{{counterString}}</div>
        <button @click="handleAddClick">点我加一</button>
        <button @click="handleAsyncAddClick">点我一秒后加一</button>
        <div>
            <button @click="handleGetTodoClick">点我请求json</button>
        </div>
        <ul>
            <li v-for="(val, key) in onlineTodo">{{`${key} : ${val}`}}</li>
        </ul>
        <fieldset>
            <legend>
                组件引入示例
            </legend>
            输入你的姓名：<input type="text" v-model="inputName">
            <hello-world :msg="inputName" v-if="inputName"></hello-world>
        </fieldset>
    </div>
</template>

<script>
    import HelloWorld from "../components/Helloworld";
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

    export default {

        components: {
            HelloWorld
        },

        data: () => ({
            inputName: ""
        }),

        computed: {

            ...mapState({
                count: state => state.home.count,
                onlineTodo: state => state.home.onlineTodo
            }),

            // getter
            ...mapGetters({
                counterString: "home/counterString"
            })

        },

        methods: {
            handleAddClick() {
                this.increase(2);
            },
            handleAsyncAddClick() {
                this.asyncIncrease(2)
            },
            handleGetTodoClick() {
                this.getOnlineTodo(this.count)
            },

            // 同步mutations
            ...mapMutations({
                increase: "home/increase"
            }),

            // 异步actions
            ...mapActions({
                asyncIncrease: "home/asyncIncrease",
                getOnlineTodo: "home/getOnlineTodo"
            }),

        }
    };
</script>

<style lang="scss" scoped>
</style>