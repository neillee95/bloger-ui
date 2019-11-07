<template>
  <el-card>
    <div class="title">[{{article.type}}] {{article.title}}</div>
    <div class="create-time"><i class="el-icon-time"></i> {{dateFormat(article.createTime)}}</div>
    <div class="tags">
      <el-tag class="tag" effect="dark" v-for="(tag,index) in article.tags" :key="index">{{tag}}</el-tag>
    </div>
    <div v-html="markedContent"></div>
  </el-card>
</template>

<script>
  import 'markdown-it-highlight/dist/index.css';

  import {getArticle} from "@/apis/admin/article";
  import md from '@/utils/markdown-it';
  import {dateFormat} from "@/utils/date";

  export default {
    name: "ArticleBody",
    props: {
      articleId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        article: {}
      }
    },
    computed: {
      markedContent() {
        if (this.article && this.article.content) {
          return md.render(this.article.content);
        }
        return "";
      }
    },
    methods: {
      getArticle() {
        getArticle(this.articleId).then(({data}) => {
          if (data) {
            this.article = data.data || {};
          }
        });
      },
      dateFormat(timestamp) {
        return dateFormat(timestamp);
      }
    },
    created() {
      this.getArticle();
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    font-size: 24px;
    font-weight: bold;
  }

  .create-time {
    margin: 4px 0;
    color: #b0baba;
  }

  .tags {
    margin: 8px 0;
  }

  .tag {
    margin-right: 8px;
    border-radius: 16px;
  }

  img {
    width: 100%;
  }
</style>
