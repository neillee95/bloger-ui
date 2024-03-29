<template>
  <el-card>
    <div class="title">{{ '[' + article.type + ']' }} {{ article.title }}</div>
    <div class="subtitle">
      <span class="article-indicator" title="发布时间">
        <i class="el-icon-time" /> {{ dateFormat(article.createTime) }}
      </span>
      <span class="article-indicator" title="阅读次数">
        <i class="el-icon-user-solid" /> {{ article.viewCount }}
      </span>
    </div>
    <div>
      <router-link class="tag" v-for="(tag,index) in article.tags" :key="index" :to="`/tag/${escape(tag)}`">
        # {{ tag }}
      </router-link>
    </div>
    <div class="article-content" ref="content" v-html="markedContent" />
  </el-card>
</template>

<script>
import { getArticle } from "@/apis/article";
import { getAnchorMd } from '@/utils/markdown-it';
import { dateFormat } from "@/utils/date";

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
        document.querySelectorAll("img").forEach(it => {
          it.classList.add("article-image");
        });
      });
    }
  },
  created() {
    this.getArticle();
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
      return window.encodeURI(val);
    }
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

.article-content {
  margin-top: 32px;
}

.article-indicator {
  margin-right: 8px;
}
</style>
