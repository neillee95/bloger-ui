<template>
  <div>
    <div class="search-input-wrapper">
      <el-input
        class="search-input"
        placeholder="请输入标题"
        prefix-icon="el-icon-search"
        v-model="search"
        clearable
      />
    </div>
    <el-table :data="articles">
      <el-table-column label="标题" style="min-width: 200px">
        <template slot-scope="scope">
          <router-link :to="`/admin/article/${scope.row._id}/preview`" title="预览">{{ scope.row.title }}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" width="80" align="center"/>
      <el-table-column label="标签" width="260">
        <template slot-scope="scope">
          <el-tag v-for="(tag,index) in scope.row.tags" :key="index">{{ tag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="viewCount" label="阅读次数" width="100" align="center"/>
      <el-table-column prop="createTime" label="创建时间" width="180" align="center">
        <template slot-scope="scope">
          {{ dateFormat(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column prop="commentCount" label="评论数量" width="100" align="center">
        <template slot-scope="scope">
          <router-link to="#">{{ scope.row.commentCount || 0 }}</router-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            size="mini"
            @click="handleEdit(scope.row._id)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            size="mini"
            @click="handleDelete(scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import mixin from "@/mixins/admin/Articles";

export default {
  name: "Articles",
  components: { Pagination },
  mixins: [mixin]
}
</script>

<style lang="scss" scoped>
.search-input-wrapper {
  margin-bottom: 16px;
}

.search-input {
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
  padding: 0;
  width: 72px;
  height: 32px;
  line-height: 32px;

  & + .el-button {
    margin-left: 4px;
  }
}
</style>
