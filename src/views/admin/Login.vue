<template>
  <div class="login-container">
    <el-card class="login-box">
      <div class="welcome">Welcome</div>
      <div class="form">
        <underline-input
          class="form-input"
          placeholder="username"
          v-model="form.username" required/>
        <underline-input
          class="form-input"
          placeholder="password"
          type="password"
          v-model="form.password" required/>
        <el-button class="form-submit" type="primary" :loading="submitting" @click="handleSubmit">
          LOGIN
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  import UnderlineInput from "../../components/UnderlineInput";
  import mixin from "@/mixins/admin/Login";

  export default {
    name: "Login",
    components: {UnderlineInput},
    mixins: [mixin],
  }
</script>

<style scoped>
  .login-container {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(-135deg, #c850c0, #4158d0);
  }

  .login-box {
    padding: 64px;
    width: 600px;
  }

  .welcome {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 32px;
  }

  .form {
    text-align: center;
    margin-bottom: 8px;
  }

  .form-input {
    max-width: 280px;
  }

  .form-submit {
    width: 100%;
    border-radius: 40px;
    max-width: 280px;
    font-weight: bold;
    margin-top: 24px;
  }
</style>
