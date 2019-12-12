<template>
  <div>
    <div>
      <b style="margin-right: 8px">Tag</b>
      <span>{{$route.params['name']}}</span>
      <span style="margin-left: 32px"><i class="el-icon-s-data"/> 共 {{articles.length}} 篇</span>
    </div>
    <ol>
      <li v-for="(item,index) in articles" :key="index">
        <el-link :href="`/a/${item._id}`">{{item.title}}</el-link>
      </li>
    </ol>
  </div>
</template>

<script>
  import mixin from "@/mixins/tag";

  export default {
    name: "Tag",
    mixins: [mixin]
  }
</script>

<style scoped>
  li a {
    font-size: 16px;
  }

  i {
    color: #fc2f70;
  }
</style>
