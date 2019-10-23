<template>
  <div>
    <div><b>Tag</b> {{$route.params['name']}}</div>
    <ol>
      <li>
        <el-link href="/a/1">SpringApplication启动过程</el-link>
      </li>
      <li>
        <el-link href="/a/2">Tomcat在SpringBoot中的启动过程</el-link>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: "Tag"
  }
</script>

<style scoped>
  li a {
    font-size: 16px;
  }
</style>
