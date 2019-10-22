<template>
  <div class="wrapper">
    <navigation/>
    <el-row class="main">
      <el-col :xs="0" :sm="2"/>
      <el-col :xs="24" :sm="20">
        <transition name="fade">
          <router-view class="container"/>
        </transition>
      </el-col>
      <el-col :xs="0" :sm="2"/>
    </el-row>
    <Footer/>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation";
  import Footer from '../components/Footer';

  export default {
    name: "Layout",
    components: {Footer, Navigation}
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: #f7f7f7;
    height: 100%;
    min-height: 100%;
    overflow: auto;
  }

  .main {
    clear: both;
    min-height: calc(100% - 195px);
    overflow: auto;
  }

  .fade-enter-to, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter-active, .fade-leave-to {
    opacity: 0;
  }

  .el-col {
    min-height: 1px;
  }
</style>
