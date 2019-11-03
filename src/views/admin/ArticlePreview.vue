<template>
  <article-body :article-id="$route.params['id']"></article-body>
</template>

<script>
  import ArticleBody from "@/components/ArticleBody";

  export default {
    name: "ArticlePreview",
    components: {ArticleBody}
  }
</script>

<style scoped>

</style>