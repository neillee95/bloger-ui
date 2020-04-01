<template>
  <el-row>
    <el-col :xs="24" :sm="18">
      <article-body
        :article-id="$route.params['id']"
        @toc-generated="generateToc"
        @article-rendered="setTitle"
        v-show="loaded"/>
      <div class="loading" v-show="!loaded">
        <block-progress-spinner style="margin: 20px auto"/>
        <p>正在加载</p>
      </div>
      <el-card class="comment-box" v-if="false">
        评论
      </el-card>
    </el-col>

    <el-col class="side-bar" :xs="0" :sm="6">
      <div :class="{'catalog-fixed': scrollTop > 80}">
        <div>目录</div>
        <div v-html="toc"></div>
      </div>
    </el-col>

    <back-top v-show="scrollTop > 200"/>
  </el-row>
</template>

<script>
  import ArticleBody from "@/components/ArticleBody";
  import BackTop from "@/components/BackTop";
  import BlockProgressSpinner from '@/components/BlockProgressSpinner';

  import mixin from "@/mixins/article";

  export default {
    name: "Article",
    components: {ArticleBody, BackTop, BlockProgressSpinner},
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

  .loading {
    margin: 16px 0;
    text-align: center;
  }
</style>
