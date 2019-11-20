<template>
  <div>
    <div><span style="margin: 0 4px;color: #a22029">#</span>共有 {{(tags || []).length}} 个Tag</div>
    <div style="margin: 16px 0">
      <router-link :to="`/tag/${escape(tag)}`" v-for="(tag,index) in tags" :key="index">
        <el-tag effect="dark">{{tag}}</el-tag>
      </router-link>
    </div>
  </div>
</template>

<script>
  import mixin from "@/mixins/tags";

  export default {
    name: "Tags",
    mixins: [mixin]
  }
</script>

<style lang="scss" scoped>
  .el-tag {
    margin: 4px 8px;
    border-radius: 16px;
    padding: 0 16px;
    font-size: 16px;

    &:hover {
      border-radius: 4px;
      box-shadow: 4px 4px rgba(0, 0, 0, 0.1);
    }
  }
</style>
