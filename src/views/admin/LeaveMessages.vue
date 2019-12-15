<template>
  <div>
    <el-table
      :data="messages"
      border>
      <el-table-column prop="name" label="昵称" width="120"/>
      <el-table-column label="站点" width="180">
        <template slot-scope="scope">
          <a :href="scope.row.website" target="_blank">{{scope.row.website}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"/>
      <el-table-column prop="time" label="时间" width="140">
        <template slot-scope="scope">
          {{dateFormat(scope.row.time)}}
        </template>
      </el-table-column>
      <el-table-column label="可见" width="60">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.show"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="stateChanged(scope.row)"/>
        </template>
      </el-table-column>
      <el-table-column prop="message" label="内容"/>
    </el-table>

    <pagination :current="currentPage"
                :total="total"
                @page-changed="pageChanged"/>
  </div>
</template>

<script>
  import Pagination from "@/components/Pagination";
  import {getLeaveMessages, switchShowState} from "@/apis/admin/message";
  import {dateFormat} from "@/utils/date";

  import response from "@/apis/response";

  export default {
    name: "LeaveMessages",
    components: {Pagination},
    data() {
      return {
        currentPage: 1,
        total: 0,
        messages: []
      }
    },
    methods: {
      dateFormat,
      getLeaveMessages() {
        getLeaveMessages(this.currentPage).then(({data}) => {
          if (data) {
            const pageResult = data.data;
            this.currentPage = pageResult.current;
            this.total = pageResult.total;
            this.messages = pageResult.results;
          }
        });
      },
      pageChanged(page) {
        this.currentPage = page;
        this.getLeaveMessages();
      },
      stateChanged(message) {
        console.log(message);
        switchShowState(message.id).then(({data}) => {
          if (data && data.code === response.success) {
            this.$message.success('切换成功');
          } else {
            this.$message.error('切换失败');
          }
        });
      }
    },
    created() {
      this.getLeaveMessages();
    }
  }
</script>

<style scoped>

</style>
