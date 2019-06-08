<template>
  <div>
    hello world
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/Helloworld.vue";
export default Vue.extend({
  components: {
    HelloWorld
  }
});
</script>

