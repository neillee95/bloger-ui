<template>
  <div>
    <div style="margin: 16px 0" v-if="leaveMessage">
      <el-input type="textarea"
                :autosize="{ minRows: 4, maxRows: 8}"
                placeholder="说点什么吧...😃"
                v-model="message.message">
      </el-input>
      <el-row style="margin-top: 16px" :gutter="20">
        <el-col :xs="24" :sm="7">
          <underline-input class="input" placeholder="name" v-model="message.name" required/>
        </el-col>
        <el-col :xs="24" :sm="8">
          <underline-input class="input" placeholder="E-mail" v-model="message.email" required/>
        </el-col>
        <el-col :xs="24" :sm="7">
          <underline-input class="input" placeholder="Website" v-model="message.website" required/>
        </el-col>
        <el-col :xs="24" :sm="2">
          <el-button type="primary" :loading="sending" @click="handleLeaveMessage">留言</el-button>
        </el-col>
      </el-row>
    </div>
    <div style="margin: 32px 0 16px 0">
      <text-divider position="center" text="留言"/>
      <el-card>随便看看😊</el-card>
      <el-card>
        A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine
        happiness and warm, positive feelings.<br><br>

        On Snapchat, this emoji next to a contact denotes that you message that person often but they aren't your #1
        Best Friend.<br><br>

        Smiling Face With Smiling Eyes was approved as part of Unicode 6.0 in 2010 and added to Emoji 1.0 in 2015.🐵🐱
      </el-card>
    </div>
  </div>
</template>

<script>
  import TextDivider from "./TextDivider";
  import UnderlineInput from "./UnderlineInput";

  import {leaveMessage} from "@/apis/message";
  import response from "@/apis/response";

  export default {
    name: "MessageBoard",
    components: {UnderlineInput, TextDivider},
    data() {
      return {
        sending: false,
        leaveMessage: this.$store.state.preference.leaveMessage,
        message: {
          name: '',
          email: '',
          website: '',
          message: ''
        }
      }
    },
    methods: {
      validateFields() {
        const message = this.message;
        if (message.name && message.email && message.website && message.message) {
          return true;
        } else {
          this.$message('请输入所有字段');
          return false;
        }
      },
      handleLeaveMessage() {
        if (this.validateFields()) {
          this.sending = true;
          leaveMessage(this.message).then(({data}) => {
            if (data && data.code === response.success) {
              this.$message.success('留言成功');
            } else {
              this.$message.error('留言失败');
            }
          }).finally(() => {
            this.sending = false;
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-card {
    margin: 8px 0;
  }

  .input {
    width: 100%;
    display: inline-block;
    margin-bottom: 8px !important;
  }
</style>
