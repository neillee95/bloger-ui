<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="p in 17" :key="p">
        <router-link to="/a/1">
          <el-card class="article-card" :body-style="{ padding: '0px' }">
            <el-image class="article-image" :src="articleImage" fit="cover" lazy/>
            <div class="article-title">
              <div style="margin: 2px 0;font-weight: bold">SpringApplication启动过程启动过程SpringApplication</div>
              <div class="article-time">{{new Date()}}</div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Index",
    data() {
      return {
        articleImage: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .article {
    &-card {
      margin: 4px;
      height: 320px;
      overflow: hidden;
      position: relative;
    }

    &-image {
      height: 260px;
      transition: transform .8s, filter .8s ease-in-out;
      transform-origin: center center;
      filter: brightness(50%);

      &:hover {
        filter: brightness(100%);
        transform: scale(1.3);
      }
    }

    &-title {
      padding: 8px 4%;
      position: absolute;
      bottom: 0;
      width: 92%;
      z-index: 10;
      background-color: white;
    }

    &-time {
      font-size: 12px;
    }
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
</style>
