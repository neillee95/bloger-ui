<template>
  <div>
    <mavon-editor style="min-height: 600px" v-model="content"></mavon-editor>
    <div class="row">
      <el-button type="primary" round @click="updateAboutMe"><i class="el-icon-upload"></i> 保存</el-button>
    </div>
  </div>
</template>

<script>
  import {getAboutMe} from "@/apis/page";
  import {updateAboutMe} from "@/apis/admin/page";
  import response from "@/apis/response";

  export default {
    name: "AboutMe",
    data() {
      return {
        content: ''
      }
    },
    methods: {
      getAboutMe() {
        getAboutMe().then(({data}) => {
          if (data) {
            this.content = data.data || '';
          }
        });
      },
      updateAboutMe() {
        updateAboutMe(this.content).then(({data}) => {
          if (data && data.code === response.success) {
            this.$message.success('更新成功');
          } else {
            this.$message.error('更新失败');
          }
        });
      }
    },
    created() {
      this.getAboutMe();
    }
  }
</script>

<style scoped>
  .row {
    text-align: right;
    margin: 16px 0;
  }
</style>
