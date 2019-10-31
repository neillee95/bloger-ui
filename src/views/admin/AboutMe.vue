<template>
  <div>
    <mavon-editor style="min-height: 400px" v-model="content"></mavon-editor>
    <div class="row">
      <el-button type="primary" round><i class="el-icon-upload"></i> 保存</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutMe",
    data() {
      return {
        content: ''
      }
    }
  }
</script>

<style scoped>
  .row {
    text-align: right;
    margin-top: 16px;
    height: 42px;
    line-height: 42px;
  }
</style>
