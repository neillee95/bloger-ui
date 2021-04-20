<template>
  <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px">
    <el-form-item label="旧密码" prop="oldPassword">
      <el-input type="password" v-model="form.oldPassword" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="新密码" prop="newPassword">
      <el-input type="password" v-model="form.newPassword" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="确认密码" prop="confirmPassword">
      <el-input type="password" v-model="form.confirmPassword" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('form')">提交</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {updatePassword} from "@/apis/admin/password";
  import response from "@/apis/response";
  import {removeToken} from "@/utils/auth";
  import constant from '@/constant';
  import sha256 from 'js-sha256';

  export default {
    name: "Password",
    data() {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.form.confirmPassword !== '') {
            this.$refs["form"].validateField('confirmPassword');
          }
          callback();
        }
      };
      const validateConfirmPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        },
        rules: {
          oldPassword: [
            {validator: validatePass, trigger: 'blur'}
          ],
          newPassword: [
            {validator: validatePass, trigger: 'blur'}
          ],
          confirmPassword: [
            {validator: validateConfirmPass, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            this.updatePassword();
          } else {
            return false;
          }
        });
      },
      resetForm() {
        this.$refs['form'].resetFields();
      },
      updatePassword() {
        const form = Object.assign({}, this.form);
        form.oldPassword = sha256.sha256(form.oldPassword);
        form.newPassword = sha256.sha256(form.newPassword);
        form.confirmPassword = sha256.sha256(form.confirmPassword);

        updatePassword(form).then(({data}) => {
          if (data && data.code === response.success) {
            this.$message.success('更新成功, 请重新登录');
            removeToken();
            this.$router.push(`${constant.LOGIN_PATH}`);
          } else {
            this.$message.error('密码错误');
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
