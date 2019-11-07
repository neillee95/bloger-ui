import {deleteArticle} from "@/apis/admin/article";
import {getDrafts, publish} from "@/apis/admin/draft";
import response from "@/apis/response";
import {dateFormat} from "@/utils/date";

const mixin = {
  data() {
    return {
      search: '',
      articles: []
    }
  },
  methods: {
    handlePublish(articleId) {
      this.$confirm('确认发布?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.publishDraft(articleId);
      }).catch(() => {});
    },
    publishDraft(articleId) {
      publish(articleId).then(({data}) => {
        if (data && data.code === response.success) {
          this.$message({
            type: 'success',
            message: '发布成功!'
          });
          this.getDrafts();
        }
      });
    },
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
          this.getDrafts();
        }
      });
    },
    getDrafts() {
      getDrafts().then(({data}) => {
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
    this.getDrafts();
  }
};

export default mixin;
