<template>
  <div class="wrapper">
    <navigation :preference="preference"/>
    <el-row class="main">
      <el-col :xs="0" :sm="2"/>
      <el-col :xs="24" :sm="20">
        <transition name="fade">
          <router-view class="container"/>
        </transition>
      </el-col>
      <el-col :xs="0" :sm="2"/>
    </el-row>
    <b-footer :preference="preference"/>
  </div>
</template>

<script>
  import Navigation from "@/components/Navigation";
  import BFooter from '@/components/Footer';

  import {getBlogConfig} from "@/apis/blog";

  export default {
    name: "Layout",
    components: {BFooter, Navigation},
    data() {
      return {
        preference: {}
      }
    },
    methods: {
      getBlogConfig() {
        getBlogConfig().then(({data}) => {
          if (data && data.data) {
            this.preference = data.data;
            this.$store.commit('setPreference', this.preference);
          }
        });
      }
    },
    created() {
      this.getBlogConfig();
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    min-height: 100%;
    overflow: visible;
  }

  .main {
    background-color: #f7f7f7;
    clear: both;
    min-height: calc(100% - 195px);
    overflow: visible;
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
