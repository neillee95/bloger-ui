<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="博客标题" prop="name">
        <el-input v-model="form.name"/>
      </el-form-item>

      <el-form-item label="页脚签名">
        <el-input type="textarea" v-model="form.footer" :autosize="{ minRows: 2, maxRows: 4}">
        </el-input>
      </el-form-item>

      <el-form-item label="开启留言">
        <el-switch v-model="form.leaveMessage"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')" round>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getBlogConfig} from "@/apis/blog";
  import {saveBlogConfig} from "@/apis/admin/blog";
  import response from "@/apis/response";

  export default {
    name: "Preference",
    data() {
      return {
        form: {
          name: '',
          footer: '',
          leaveMessage: false
        },
        rules: {
          name: [
            {required: true, message: '请输入博客标题', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.saveBlogConfig();
          } else {
            return false;
          }
        });
      },
      getBlogConfig() {
        getBlogConfig().then(({data}) => {
          if (data && data.data) {
            this.form = data.data;
            console.log(this.form);
          }
        });
      },
      saveBlogConfig() {
        saveBlogConfig(this.form).then(({data}) => {
          if (data && data.code === response.success) {
            this.$message.success("更新成功");
          } else {
            this.$message.error("更新失败");
          }
        });
      }
    },
    created() {
      this.getBlogConfig();
    }
  }
</script>

<style scoped>

</style>
