<template>
  <div class="tips" @click="handleClick">{{msg}}</div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "HelloWorld",
  data: () => ({ msg: "hello, looyulong" }),
  methods: {
      handleClick() {

alert(this.msg)
      }
  }
});
</script>

<style lang="scss" scoped>
.tips {
  color: red;
}
</style>