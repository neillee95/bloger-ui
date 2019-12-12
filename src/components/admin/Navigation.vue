<template>
  <div class="nav">
    <div>
      <el-button class="sidebar-toggle" icon="el-icon-s-fold" circle/>
      <router-link to="/admin" style="font-size: 18px">
        <b>Bloger</b>
      </router-link>
    </div>
    <router-link to="/" style="padding: 8px" title="前往博客">
      Bloger
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style lang="scss" scoped>
  .nav {
    padding: 10px 16px;
    background-color: white;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
