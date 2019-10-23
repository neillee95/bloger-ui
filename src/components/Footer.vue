<template>
  <div class="footer">
    <el-row>
      <el-col :xs="0" :md="2"/>
      <el-col :xs="24" :md="20">
        <div>开放、自由、民主、和平</div>
        <div><a href="https://github.com/neillee95" target="_blank">GitHub</a></div>
        <div><a href="mailto:crossthebackstreet@gmail.com">e-mail</a></div>
      </el-col>
      <el-col :xs="0" :md="2"/>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="scss" scoped>
  .footer {
    height: 96px;
    padding: 16px;
    background-color: white;
  }

  .el-col {
    min-height: 1px;
  }
</style>
