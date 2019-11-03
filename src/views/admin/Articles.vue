<template>
  <div>
    <el-input class="search-input"
              placeholder="请输入标题"
              prefix-icon="el-icon-search"
              v-model="search"
              clearable/>

    <el-table :data="articles" style="width: 100%">
      <el-table-column label="标题">
        <template slot-scope="scope">
          <router-link :to="`/admin/article/${scope.row.id}/preview`" title="预览">{{scope.row.title}}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="分类" width="200"/>
      <el-table-column label="标签" width="300">
        <template slot-scope="scope">
          <el-tag v-for="(tag,index) in scope.row.tags" :key="index">{{tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="viewCount" label="阅读次数" width="120"/>
      <el-table-column prop="createTime" label="创建时间" width="180"/>
      <el-table-column prop="commentCount" label="评论数量" width="120"/>
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row.id)" type="primary" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row.id)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination :hide-on-single-page="false"/>
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination";

  import {getArticles, deleteArticle} from "../../apis/admin/article";
  import response from "../../apis/response";

  export default {
    name: "Articles",
    components: {Pagination},
    data() {
      return {
        search: '',
        articles: [
          {id: 1, title: '内嵌在SpringBoot中的Tomcat', category: 'xuuxxx',tags: ["Java", "Kotlin"], viewCount: '20000', createTime: '2019-11-01 12:00:00', commentCount: 200},
          {id: 2, title: 'xxxxxxxxxxxxxxoooooxxxxxxxxxx', category: 'xxxzzx', viewCount: '24500', createTime: '2019-11-01 12:00:00', commentCount: 19},
          {id: 3, title: 'xxxxxxaaaaaaaxxxxxxxffffxxxxx', category: 'xxooxx', viewCount: '30000', createTime: '2019-11-01 12:00:00', commentCount: 186},
        ]
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
        }).catch();
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
      }
    },
    created() {
      // this.getArticles();
    }
  }
</script>

<style lang="scss" scoped>
  .search-input {
    margin-bottom: 16px;
    width: 320px;
  }

  a {
    text-decoration: none;
    color: #409eff;

    &:hover {
      text-decoration: underline;
    }
  }

  .el-tag {
    margin: 4px;
  }

  .el-button {
    margin: 2px;
  }
</style>
