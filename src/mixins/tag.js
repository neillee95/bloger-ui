import {getArticlesByTag} from "@/apis/tag";

const mixin = {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    getArticlesByTag() {
      getArticlesByTag(window.escape(this.$route.params['name'])).then(({data}) => {
        if (data) {
          this.articles = data.data;
        }
      });
    }
  },
  created() {
    this.getArticlesByTag();
  }
};

export default mixin;
