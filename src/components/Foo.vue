<template>
  <div>
    {{ test }}
  </div>
</template>

<script>
export default {
  name: "foo",
  data: () => ({
    test: "foo"
  }),
  methods: {
    test() {
      console.log("test");
    }
  }
};
</script>

<style lang="scss" scoped></style>
