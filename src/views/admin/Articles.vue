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
          <router-link :to="`/a/${scope.row.id}`" target="_blank">{{scope.row.title}}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="分类" width="200"/>
      <el-table-column prop="tags" label="标签" width="300"/>
      <el-table-column prop="viewCount" label="阅读次数" width="120"/>
      <el-table-column prop="createTime" label="创建时间" width="180"/>
      <el-table-column prop="commentCount" label="评论数量" width="120"/>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.id)" type="text" size="small">查看</el-button>
          <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
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
          {id: 1, title: '内嵌在SpringBoot中的Tomcat', category: 'xuuxxx', viewCount: '20000', createTime: '2019-11-01 12:00:00', commentCount: 200},
          {id: 2, title: 'xxxxxxxxxxxxxxoooooxxxxxxxxxx', category: 'xxxzzx', viewCount: '24500', createTime: '2019-11-01 12:00:00', commentCount: 19},
          {id: 3, title: 'xxxxxxaaaaaaaxxxxxxxffffxxxxx', category: 'xxooxx', viewCount: '30000', createTime: '2019-11-01 12:00:00', commentCount: 186},
        ]
      }
    },
    methods: {
      handleClick(articleId) {
        console.log(articleId);
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
            //TODO getArticles
          }
        });
      },
      getArticles() {
        getArticles().then(({data}) => {

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
</style>
