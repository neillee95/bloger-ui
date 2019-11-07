<template>
  <div>
    <el-row :gutter="10" style="overflow: auto">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item,index) in articles" :key="index">
        <router-link :to="`/a/${item.id}`">
          <el-card class="article-card" :body-style="{ padding: '0px' }">
            <el-image class="article-image" :src="articleImage" fit="cover" lazy/>
            <div class="article-summary">
              <span class="article-summary__text">{{item.content}}</span>
            </div>
            <div class="article-title">
              <div class="article-title__text">{{item.title}}</div>
              <div class="article-time">{{dateFormat(item.createTime)}}</div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
    <pagination :hide-on-single-page="false"/>
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination";
  import {getArticles} from "@/apis/article";
  import {dateFormat} from "@/utils/date";

  export default {
    name: "Index",
    components: {Pagination},
    data() {
      return {
        articleImage: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        articles: []
      }
    },
    methods: {
      getArticles() {
        getArticles().then(({data}) => {
          if (data) {
            this.articles = data.data;
          }
        });
      },
      dateFormat(timestamp) {
        return dateFormat(timestamp);
      }
    },
    created() {
      this.getArticles();
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
      position: absolute;
      width: 100%;
      height: 80%;

      transition: transform .8s, filter .8s ease-in-out;
      transform-origin: center center;
      filter: brightness(100%);

      &:hover {
        filter: brightness(50%);
        transform: scale(1.3);
      }
    }

    &-title {
      padding: 16px 4%;
      position: absolute;
      bottom: 0;
      width: 92%;
      z-index: 10;
      background-color: white;

      &__text {
        margin: 2px 0;
        font-weight: bold;
      }
    }

    &-summary {
      position: absolute;
      padding: 0 8%;
      height: 80%;
      overflow: hidden;
      color: white;
      background-color: rgba(67, 67, 67, 0.8);

      /*&__text {
        top: 50%;
        -moz-transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }*/
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
