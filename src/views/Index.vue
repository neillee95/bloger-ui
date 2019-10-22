<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="p in 7" :key="p">
        <router-link to="/">
          <el-card class="article_card" :body-style="{ padding: '0px' }">
            <div style="padding: 14px;background-color: white;position: absolute;bottom: 0;width: 100%">
              <div v-for="o in 4" :key="o">
                {{'列表内容 ' + o }}
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style lang="scss" scoped>
  .article_card {
    margin: 8px 4px;
    background: url("https://img.hacpai.com/bing/20190125.jpg?imageView2/1/w/1280/h/720/interlace/1/q/100");
    height: 360px;
    background-size: cover;
    position: relative;
  }
</style>
