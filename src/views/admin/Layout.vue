<template>
  <el-row class="wrapper">
    <el-col class="sidebar" :span="4">
      <el-menu class="sidebar-menu"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               :default-active="$route.path"
               router>

        <el-menu-item index="/admin/dashboard">
          <i class="el-icon-menu"></i>
          <span slot="title">仪表盘</span>
        </el-menu-item>

        <el-submenu index="article">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>文章</span>
          </template>
          <el-menu-item index="/admin/article/create" :route="{path:'/admin/article/create'}">创建文章</el-menu-item>
          <el-menu-item index="/admin/articles" :route="{path:'/admin/articles'}">全部文章</el-menu-item>
          <el-menu-item index="/admin/drafts" :route="{path:'/admin/drafts'}">草稿箱</el-menu-item>
        </el-submenu>

        <el-menu-item index="/admin/comments">
          <i class="el-icon-menu"></i>
          <span slot="title">评论</span>
        </el-menu-item>

        <el-menu-item index="/admin/system">
          <i class="el-icon-menu"></i>
          <span slot="title">系统</span>
        </el-menu-item>

        <el-submenu index="page">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>页面设置</span>
          </template>
          <el-menu-item index="/admin/aboutme" :route="{path:'/admin/aboutme'}">关于我</el-menu-item>
        </el-submenu>

      </el-menu>
    </el-col>
    <el-col :span="20" style="background-color: #f7f7f7">
      <navigation/>
      <div class="main">
        <transition name="fade">
          <router-view/>
        </transition>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import Navigation from "@/components/admin/Navigation";

  export default {
    name: "Layout",
    components: {Navigation}
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100%;
    overflow: auto;
  }

  .el-col {
    height: 100%;
    min-height: 100%;
    overflow: auto;
  }

  .sidebar {

    &::-webkit-scrollbar {
      display: none
    }

    &-menu {
      min-height: 100%;
    }
  }

  .main {
    padding: 16px;
    height: calc(100% - 104px);
    /*overflow: auto;*/
  }

  .fade-enter-to, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter-active, .fade-leave-to {
    opacity: 0;
  }
</style>
