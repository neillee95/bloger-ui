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

      <el-form-item label="社交">
        <span class="chip" v-for="(item, index) in form.social" :key="index">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#icon-' + item.split('$$')[0]"/>
          </svg>
          <a :href="item.split('$$')[1]">{{item.split('$$')[1]}}</a>
          <el-popconfirm title="确定删除？" @onConfirm="handleDeleteSocial(index)">
            <i slot="reference" class="el-icon-close chip-close"/>
          </el-popconfirm>
        </span>
        <el-button type="primary"
                   icon="el-icon-plus"
                   circle
                   style="margin: 0 8px"
                   size="small"
                   @click="socialDialogVisible = true"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')" round>保存</el-button>
      </el-form-item>
    </el-form>
    <el-dialog title="社交方式" :visible.sync="socialDialogVisible">
      <el-form :model="socialForm">
        <el-form-item label="社交" label-width="120px">
          <el-select v-model="socialForm.type" style="width: 100%">
            <el-option v-for="(item,index) in socialOptions" :key="index"
                       :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="URL" label-width="120px">
          <el-input v-model="socialForm.url" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="socialDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddSocial">确 定</el-button>
      </div>
    </el-dialog>
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
          leaveMessage: false,
          social: []
        },
        socialDialogVisible: false,
        rules: {
          name: [
            {required: true, message: '请输入博客标题', trigger: 'blur'}
          ]
        },
        socialForm: {
          type: '',
          url: ''
        },
        socialOptions: [
          {label: 'Github', value: 'github'},
          {label: 'QQ', value: 'QQ'},
          {label: 'Line', value: 'line'},
          {label: 'Twitter', value: 'twitter'},
          {label: 'Facebook', value: 'facebook'},
          {label: 'weibo', value: 'weibo'},
          {label: 'gmail', value: 'gmail'},
          {label: 'email', value: 'email'},
          {label: 'WeChat', value: 'wechat'},
          {label: 'Telegram', value: 'telegram'},
          {label: 'bilibili', value: 'bilibili'},
          {label: 'zhihu', value: 'zhihu'},
          {label: 'Messager', value: 'messager'},
          {label: 'YouTube', value: 'YouTube'},
        ]
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
      },
      handleDeleteSocial(index) {
        this.form.social.splice(index, 1);
      },
      handleAddSocial() {
        this.form.social.push(this.socialForm.type + '$$' + this.socialForm.url);
        this.socialForm.type = '';
        this.socialForm.url = '';
        this.socialDialogVisible = false;
      }
    },
    created() {
      this.getBlogConfig();
    }
  }
</script>

<style lang="scss" scoped>
  .chip {
    padding: 8px;
    border: 1px solid #2c3e50;
    border-radius: 40px;
    height: 40px;
    line-height: 40px;
    margin-right: 4px;

    &-close {
      margin: 0 4px;
      cursor: pointer;
      font-weight: bold;
    }
  }

  .icon {
    font-size: 1.5em;
    margin-right: 4px;
  }
</style>
