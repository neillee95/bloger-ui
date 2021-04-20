<template>
  <div>
    <el-timeline>
      <el-timeline-item v-for="(item,index) in archives"
                        :key="index"
                        :timestamp="`${item._id} (${item.count})`"
                        placement="top"
                        size="large"
                        color="#409eff">
        <el-card v-for="(article, index) in item.articles"
                 :key="index"
                 style="margin-bottom: 8px">
          <p class="create-time">
            {{dateFormat(article.createTime)}}
          </p>
          <el-link type="primary" :href="`/a/${article.id}`">
            {{article.title}}
          </el-link>
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <div style="text-align: center">
      <progress-spinner style="width: 32px" v-show="loading"/>
      <span v-show="!hasMore">没有更多了~</span>
    </div>
  </div>
</template>

<script>
  import mixin from "@/mixins/archives";
  import ProgressSpinner from "@/components/ProgressSpinner";

  export default {
    name: "Archives",
    components: {ProgressSpinner},
    mixins: [mixin],
  }
</script>

<style lang="scss" scoped>
  .create-time {
    font-size: 12px;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>
