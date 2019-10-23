<template>
  <div>
    <div style="margin: 16px 0">
      <el-input type="textarea"
                :autosize="{ minRows: 4, maxRows: 8}"
                placeholder="说点什么吧...😃"
                v-model="message">
      </el-input>
      <div style="margin-top: 16px;text-align: right;">
        <el-button type="primary" :loading="sending" @click="send">留言</el-button>
      </div>
    </div>
    <div style="margin: 32px 0 16px 0">
      <el-card>随便看看😊</el-card>
      <el-card>
        A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and warm, positive feelings.<br><br>

        On Snapchat, this emoji next to a contact denotes that you message that person often but they aren't your #1 Best Friend.<br><br>

        Smiling Face With Smiling Eyes was approved as part of Unicode 6.0 in 2010 and added to Emoji 1.0 in 2015.🐵🐱
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MessageBoard",
    data() {
      return {
        message: '',
        sending: false
      }
    },
    methods: {
      send() {
        this.sending = true;
        setTimeout(() => {
          this.sending = false;
          this.$message.success('留言成功');
        }, 2000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-card {
    margin: 8px 0;
  }
</style>
