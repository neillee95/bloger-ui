<template>
  <div class="nav">
    <el-button class="sidebar-toggle" icon="el-icon-s-fold" circle/>
    <router-link to="/admin" style="font-size: 18px">
      <b>Bloger</b>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style scoped>
  .nav {
    padding: 12px 16px;
    background-color: white;
    height: 48px;
    line-height: 48px;
  }

  a {
    color: #2c3e50;
    text-decoration: none;
  }

  .sidebar-toggle {
    border: none;
    background-color: transparent;
    font-size: 20px;
  }
</style>
