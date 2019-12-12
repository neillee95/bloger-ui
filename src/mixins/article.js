import {scrollTop} from "@/utils/scroll";
import {viewArticleAndCount} from '@/apis/article';

const mixin = {
  data() {
    return {
      scrollTop: 0,
      toc: null,
      loaded: false
    }
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
      viewArticleAndCount(this.$route.params["id"]);
    }
  },
  created() {
    document.title = "loading";
    window.addEventListener('scroll', this.handleScroll, true);
    setTimeout(() => {
      this.viewArticleAndCount();
    }, 30000);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll, true);
  }
};

export default mixin;
