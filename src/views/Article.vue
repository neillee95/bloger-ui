<template>
  <div>
    <article-body :article-id="$route.params['id']"/>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </div>
</template>

<script>
  import ArticleBody from "../components/ArticleBody";

  export default {
    name: "Article",
    components: {ArticleBody}
  }
</script>

<style scoped>

</style>
