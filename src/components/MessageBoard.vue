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
      <div v-if="messages.length > 0">
        <el-card v-for="(item,index) in messages" :key="index" >
          <div>
            <span>{{item.name}}</span>
            <span class="time">{{dateFormat(item.time)}}</span>
          </div>
          <p>{{item.message}}</p>
        </el-card>
      </div>
      <div class="empty-message" v-else>
        还没有留言
      </div>
    </div>
  </div>
</template>

<script>
  import TextDivider from "./TextDivider";
  import UnderlineInput from "./UnderlineInput";

  import {leaveMessage, getLeaveMessages} from "@/apis/message";
  import response from "@/apis/response";
  import {dateFormat} from "@/utils/date";

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
        },
        messages: []
      }
    },
    methods: {
      dateFormat,
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
      },
      getLeaveMessages() {
        getLeaveMessages().then(({data}) => {
          if (data) {
            const messages = data.data;
            if (messages && Array.isArray(messages)) {
              this.messages = data.data;
            }
          }
        });
      }
    },
    created() {
      this.getLeaveMessages();
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

  .time {
    color: #b0baba;
    font-size: 12px;
    margin-left: 16px;
  }
</style>
