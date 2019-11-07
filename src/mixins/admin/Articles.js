import {dateFormat} from '@/utils/date';
import {deleteArticle, getArticles} from "@/apis/admin/article";
import response from "@/apis/response";

const mixin = {
  data() {
    return {
      search: '',
      articles: []
    }
  },
  methods: {
    handleEdit(articleId) {
      this.$router.push(`/admin/article/${articleId}/edit`);
    },
    handleDelete(articleId) {
      this.$confirm('删除后无法恢复, 是否确定?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteArticle(articleId);
      }).catch(() => {});
    },
    deleteArticle(articleId) {
      deleteArticle(articleId).then(({data}) => {
        if (data && data.code === response.success) {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getArticles();
        }
      });
    },
    getArticles() {
      getArticles().then(({data}) => {
        if (data) {
          this.articles = data.data;
        }
      });
    },
    dateFormat(timestamp) {
      return dateFormat(timestamp);
    }
  },
  created() {
    this.getArticles();
  }
};

export default mixin;
