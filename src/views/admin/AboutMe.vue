<template>
  <div>
    <mavon-editor style="min-height: 600px" v-model="content"></mavon-editor>
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
  }
</style>
