import {scrollTop} from "@/utils/scroll";
import {viewArticleAndCount} from '@/apis/article';

const mixin = {
  data() {
    return {
      articleId: this.$route.params['id'],
      scrollTop: 0,
      toc: null,
      loaded: false
    }
  },
  created() {
    document.title = "loading";
    window.addEventListener('scroll', this.handleScroll, true);
    setTimeout(() => {
      this.viewArticleAndCount();
    }, 30000);
  },
  methods: {
    handleScroll() {
      this.scrollTop = scrollTop();
    },
    generateToc(html) {
      this.toc = html;
    },
    setTitle(article) {
      this.loaded = true;
      document.title = article.title;
    },
    viewArticleAndCount() {
      viewArticleAndCount(this.articleId);
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
};

export default mixin;
