<template>
  <div class="pagination">
    <el-pagination :page-size="pageSize"
                   layout="prev, pager, next"
                   :total="total"
                   :background="true"
                   :hide-on-single-page="hideOnSinglePage"
                   @current-change="pageChanged"/>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: {
      total: {
        type: Number,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      hideOnSinglePage: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      pageChanged(currentPage) {
        this.$emit('page-changed', currentPage);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    margin: 16px 0;
    text-align: center;
  }
</style>