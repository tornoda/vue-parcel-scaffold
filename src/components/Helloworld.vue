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
            default: 'world',
        },
    },
    methods: {
        handleMsgClick() {
            alert(this.msg);
        },
    },
});
</script>

<style lang="scss" scoped>
.tips {
    color: red;
}
</style>
