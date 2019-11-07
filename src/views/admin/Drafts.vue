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
      <el-table-column prop="type" label="类型" width="80"/>
      <el-table-column label="标签" width="260">
        <template slot-scope="scope">
          <el-tag v-for="(tag,index) in scope.row.tags" :key="index">{{tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
        <template slot-scope="scope">
          {{dateFormat(scope.row.createTime)}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button class="color-success" @click="handlePublish(scope.row.id)" type="text" size="small">发布</el-button>
          <el-button @click="handleEdit(scope.row.id)" type="text" size="small">编辑</el-button>
          <el-button class="color-danger" @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination :hide-on-single-page="false"/>
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination";
  import mixin from "@/mixins/admin/Drafts";

  export default {
    name: "Drafts",
    components: {Pagination},
    mixins: [mixin]
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

  .color {
    &-success {
      color: #67C23A;
    }

    &-danger {
      color: #f56c6c;
    }
  }
</style>
