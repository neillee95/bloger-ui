<template>
  <el-card>
    <div class="title">{{'[' + article.type + ']'}} {{article.title}}</div>
    <div class="subtitle">
      <span style="margin-right: 8px">
        <i class="el-icon-time"/> {{dateFormat(article.createTime)}}
      </span>
    </div>
    <div>
      <router-link class="tag" v-for="(tag,index) in article.tags" :key="index" :to="`/tag/${escape(tag)}`">
        # {{tag}}
      </router-link>
    </div>
    <div class="content" ref="content" v-html="markedContent"></div>
  </el-card>
</template>

<script>
  import 'markdown-it-highlight/dist/index.css';

  import {getArticle} from "@/apis/article";
  import {getAnchorMd} from '@/utils/markdown-it';
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
          return getAnchorMd(this.callback).render(this.article.content);
        }
        return "";
      }
    },
    watch: {
      markedContent() {
        this.$nextTick(() => {
          this.$emit('article-rendered', this.article);
        });
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
      },
      callback(html, ast) {
        this.$emit('toc-generated', html, ast);
      },
      escape(val) {
        return window.escape(val);
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
    margin-bottom: 16px;
  }

  .subtitle {
    margin-bottom: 8px;
    color: #b0baba;
    font-family: Helvetica, Arial, sans-serif;
  }

  .tag {
    margin-right: 8px;
    color: #66b1ff;
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  .content {
    margin-top: 32px;
  }
</style>
