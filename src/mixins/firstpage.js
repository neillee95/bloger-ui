import {getArticles} from "@/apis/article";
import {dateFormat} from "@/utils/date";

const mixin = {
  data() {
    return {
      articles: [],
      summary: '',
      currentPage: 1,
      total: 0
    }
  },
  methods: {
    getArticles() {
      getArticles(this.currentPage).then(({data}) => {
        if (data) {
          const pageResult = data.data;
          this.currentPage = pageResult.current;
          this.total = pageResult.total;
          this.articles = pageResult.results;
        }
      });
    },
    dateFormat(timestamp) {
      return dateFormat(timestamp);
    },
    removeMarkdownSymbol(content) {
      const reg = /[`#*\[\]\-!>]/g;
      return content.replace(reg, "") + "...";
    },
    pageChanged(currentPage) {
       this.currentPage = currentPage;
       this.getArticles();
    }
  },
  created() {
    this.getArticles();
    const title = this.$store.state.preference.name;
    if (title) {
      document.title = title;
    }
  }
};

export default mixin;
