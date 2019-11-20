<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="18">
        <article-body :article-id="$route.params['id']" @toc-generated="generateToc"/>
        <el-card class="comment-box">
          评论
        </el-card>
      </el-col>
      <el-col class="side-bar" :xs="0" :sm="6">
        <div :class="{'catalog-fixed': scrollTop > 80}">
          <div>目录</div>
          <div v-html="toc"></div>
        </div>
      </el-col>
    </el-row>

    <back-top v-show="scrollTop > 200"></back-top>
  </div>

</template>

<script>
  import ArticleBody from "@/components/ArticleBody";
  import BackTop from "@/components/BackTop";

  import mixin from "@/mixins/article";

  export default {
    name: "Article",
    components: {ArticleBody, BackTop},
    mixins: [mixin]
  }
</script>

<style lang="scss" scoped>
  .comment-box {
    margin: 32px 0;
  }

  .side-bar {
    padding: 0 16px;
  }

  .catalog-fixed {
    position: fixed;
    top: 16px;
    width: 18%;
  }

  .el-divider__text {
    background-color: #f7f7f7;
  }
</style>
