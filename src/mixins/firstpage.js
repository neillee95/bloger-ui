import {getArticles} from "@/apis/article";
import {dateFormat} from "@/utils/date";

const mixin = {
  data() {
    return {
      articles: [],
      summary: ''
    }
  },
  methods: {
    getArticles() {
      getArticles().then(({data}) => {
        if (data) {
          this.articles = data.data;
        }
      });
    },
    dateFormat(timestamp) {
      return dateFormat(timestamp);
    },
    removeMarkdownSymbol(content) {
      const reg = /[`#*\[\]\-!>]/g;
      return content.replace(reg, "") + "...";
    }
  },
  created() {
    this.getArticles();
    document.title = "Lee's Blog";
  }
};

export default mixin;
