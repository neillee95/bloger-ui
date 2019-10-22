<template>
  <div>
    <div><span style="margin: 0 4px;color: #a22029">#</span>共有{{3}}个Tag</div>
    <div style="margin: 16px 0">
      <router-link to="/tag/源码">
        <el-tag effect="dark">源码</el-tag>
      </router-link>
      <router-link to="/tag/SpringBoot">
        <el-tag effect="dark">SpringBoot</el-tag>
      </router-link>
      <router-link to="/tag/Java">
        <el-tag effect="dark">Java</el-tag>
      </router-link>
      <router-link to="/tag/Tomcat">
        <el-tag effect="dark">Tomcat</el-tag>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tags"
  }
</script>

<style lang="scss" scoped>
  .el-tag {
    margin: 4px 8px;
    border-radius: 16px;
    padding: 0 16px;
    font-size: 16px;

    &:hover {
      border-radius: 4px;
      box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
    }
  }
</style>
