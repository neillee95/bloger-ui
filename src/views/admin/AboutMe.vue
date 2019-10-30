<template>
  <div style="height: 100%">
    <markdown-editor ref="editor" class="editor" :init-val="content"/>
    <div class="row">
      <el-button type="primary" round @click="save"><i class="el-icon-upload"></i> 保存</el-button>
    </div>
  </div>
</template>

<script>
  import MarkdownEditor from "@/components/MarkdownEditor";

  export default {
    name: "AboutMe",
    components: {MarkdownEditor},
    data() {
      return {
        content: ''
      }
    },
    methods: {
      save() {
        //TODO save
        this.$refs['editor'].getMarkdown();
      }
    }
  }
</script>

<style scoped>
  .editor {
    min-height: calc(100% - 58px)
  }

  .row {
    text-align: right;
    margin-top: 16px;
    height: 42px;
    line-height: 42px;
  }
</style>