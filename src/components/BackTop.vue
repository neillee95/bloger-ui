<template>
  <el-button class="backtop" type="primary" icon="el-icon-caret-top" circle @click="backTop"/>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
      backTop() {
        let timer = setInterval(() => {
          let offset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop;
          offset -= 80;
          if (offset <= 0) {
            window.scrollTo(0, 0);
            clearInterval(timer);
            timer = null;
          } else {
            window.scrollTo(0, offset);
          }
        }, 10);
      }
    }
  }
</script>

<style scoped>
  .backtop {
    position: fixed;
    bottom: 40px;
    right: 40px;
    padding: 8px;
    font-size: 24px;
    z-index: 20;
  }
</style>
