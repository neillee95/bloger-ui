<template>
  <div class="footer">
    <el-row>
      <el-col :xs="0" :md="2"/>
      <el-col :xs="24" :md="20">
        <el-row>
          <el-col :xs="24" :md="12">
            <div class="item" v-html="preference.footer"></div>
            <div><a href="https://github.com/neillee95" target="_blank">GitHub</a></div>
            <div><a href="mailto:crossthebackstreet@gmail.com">e-mail</a></div>
          </el-col>
          <el-col :xs="24" :md="12">
            <div class="item">240 浏览</div>
            <div class="item">20 文章</div>
            <div class="item">100 评论</div>
            <div class="item">12 留言</div>
          </el-col>
        </el-row>
        <div style="text-align: center; margin-top: 16px">Powered by <a href="https://github.com/neillee95/bloger">Bloger</a>
        </div>
      </el-col>
      <el-col :xs="0" :md="2"/>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    props: {
      preference: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding: 24px 16px;
    background-color: white;
  }

  .el-col {
    min-height: 1px;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
    display: inline-block;
    height: 32px;
    line-height: 32px;

    &:hover {
      color: #eb5055;
    }
  }

  .item {
    margin-bottom: 8px;
  }
</style>
