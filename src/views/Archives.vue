<template>
  <div>
    <el-timeline>
      <el-timeline-item v-for="(item,index) in articles" :key="index"
                        :timestamp="timestamp(item)" placement="top" size="large" color="#409eff">
        <el-card v-for="(article,index) in Object.values(item)[0]" :key="index" style="margin-bottom: 8px">
          <p class="create-time">
            {{dateFormat(article.createTime)}}
          </p>
          <el-link type="primary" :href="`/a/${article.id}`" target="_blank">
            {{article.title}}
          </el-link>
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <div style="text-align: center">
      <bounce-loader :size="32" color="#409eff" :loading="loading" style="display: inline-block"></bounce-loader>
      <span v-show="!hasMore">没有更多了~</span>
    </div>
  </div>
</template>

<script>
  import {BounceLoader} from '@saeris/vue-spinners';
  import mixin from "@/mixins/archives";

  export default {
    name: "Archives",
    components: {BounceLoader},
    mixins: [mixin]
  }
</script>

<style lang="scss" scoped>
  .create-time {
    font-size: 12px;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>
