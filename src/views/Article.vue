<template>
  <el-row>
    <el-col :span="18">
      <article-body :article-id="$route.params['id']"/>
      <el-card class="comment-box">
        评论
      </el-card>
    </el-col>
    <el-col class="side-bar" :span="6">
      <div style="position: fixed; top: 16px">
        目录
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import ArticleBody from "../components/ArticleBody";

  export default {
    name: "Article",
    components: {ArticleBody},
    methods: {
      handleScroll() {
        console.log(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
      }
    },
    created() {
      window.addEventListener('scroll', this.handleScroll, true);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll, true);
    }
  }
</script>

<style lang="scss" scoped>
  .comment-box {
    margin: 32px 0;
  }

  .side-bar {
    padding: 0 32px;
  }

  .el-divider__text {
    background-color: #f7f7f7;
  }
</style>
