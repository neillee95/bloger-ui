<template>
  <div>
    article {{articleId}}
  </div>
</template>

<script>
  export default {
    name: "ArticleBody",
    props: {
      articleId: {
        type: String,
        required: true
      }
    },
    methods: {
      getArticle() {

      }
    },
    created() {
      this.getArticle();
    }
  }
</script>

<style scoped>

</style>