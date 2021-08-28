import { getArticlesByTag } from "@/apis/tag";

const mixin = {
  data() {
    return {
      tag: this.$route.params['name'],
      articles: []
    }
  },
  methods: {
    getArticlesByTag() {
      getArticlesByTag(window.decodeURI(this.tag)).then(({data}) => {
        if (data) {
          this.articles = data.data;
        }
      });
    }
  },
  created() {
    this.getArticlesByTag();
    document.title = `Tag - ${this.$route.params['name']}`;
  }
};

export default mixin;
