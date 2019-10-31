<template>
  <div>

    <el-input class="search-input"
              placeholder="请输入标题"
              prefix-icon="el-icon-search"
              v-model="search"
              clearable/>

    <el-table :data="articles" style="width: 100%">
      <el-table-column prop="title" label="标题"/>
      <el-table-column prop="category" label="分类" width="200"/>
      <el-table-column prop="tags" label="标签"/>
      <el-table-column prop="viewCount" label="阅读次数" width="120"/>
      <el-table-column prop="createTime" label="创建时间" width="180"/>
      <el-table-column prop="commentCount" label="评论数量" width="120"/>
    </el-table>

    <pagination :hide-on-single-page="false"/>
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination";

  export default {
    name: "Articles",
    components: {Pagination},
    data() {
      return {
        search: '',
        articles: [
          {title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', category: 'xuuxxx', viewCount: '20000', createTime: '2019-11-01 12:00:00', commentCount: 200},
          {title: 'xxxxxxxxxxxxxxoooooxxxxxxxxxx', category: 'xxxzzx', viewCount: '24500', createTime: '2019-11-01 12:00:00', commentCount: 19},
          {title: 'xxxxxxaaaaaaaxxxxxxxffffxxxxx', category: 'xxooxx', viewCount: '30000', createTime: '2019-11-01 12:00:00', commentCount: 186},
        ]
      }
    }
  }
</script>

<style scoped>
  .search-input {
    margin: 16px 0;
    width: 480px;
  }
</style>
