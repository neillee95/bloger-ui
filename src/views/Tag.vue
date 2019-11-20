<template>
  <div>
    <div><b>Tag</b> {{$route.params['name']}}</div>
    <ol>
      <li v-for="(item,index) in articles" :key="index">
        <el-link :href="`/a/${item.id}`">{{item.title}}</el-link>
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
</style>
