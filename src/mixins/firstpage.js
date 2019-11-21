import {getArticles} from "@/apis/article";
import {dateFormat} from "@/utils/date";

const mixin = {
  data() {
    return {
      articleImage: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
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
  }
};

export default mixin;
