<template>
  <div>
    <el-row :gutter="10" style="overflow: auto">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item,index) in articles" :key="index"
              @mouseenter.native="summary=item.id" @mouseleave.native="summary=''">
        <router-link :to="`/a/${item.id}`">
          <el-card class="article-card" :body-style="{ padding: '0px' }">
            <el-image class="article-image" :src="articleImage" fit="cover" lazy/>
            <div class="article-summary" v-show="summary===item.id">
              {{removeMarkdownSymbol(item.content)}}
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
  import mixin from "@/mixins/firstpage";

  export default {
    name: "Index",
    components: {Pagination},
    mixins: [mixin]
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
      overflow-wrap: break-word;
      color: white;
      background-color: rgba(67, 67, 67, 0.8);
      display: flex;
      align-items: center;
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
