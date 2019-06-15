<template>
    <div class="tips" @click="handleMsgClick">hello, {{ msg }}</div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: 'world'
        }
    },
    methods: {
        handleMsgClick() {
            alert(this.msg);
            /**
             * 用于错误测试、演示
             */
            alert(test);
        }
    }
});
</script>

<style lang="scss" scoped>
.tips {
    color: red;
}
</style>
