<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title" maxlength="16" show-word-limit/>
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <el-input v-model="form.tags"/>
      </el-form-item>
      <el-form-item label="分类" prop="category">
        <el-input v-model="form.category" maxlength="16" show-word-limit/>
      </el-form-item>
      <el-form-item label="封面图">
        <el-input v-model="form.cover"/>
      </el-form-item>
      <el-form-item label="是否可以评论">
        <el-radio-group v-model="form.canComment">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否发布">
        <el-radio-group v-model="form.publish">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item v-if="form.publish" label="即刻发布">
        <el-switch v-model="form.publishNow"></el-switch>
      </el-form-item>
      <el-form-item v-if="!form.publishNow" label="发布日期时间" prop="publishTime">
        <el-date-picker v-model="form.publishTime"
                        type="datetime"
                        placeholder="选择发布日期时间"/>
      </el-form-item>
      <el-form-item label="内容">
        <el-upload style="margin-bottom: 16px"
                   action="" :before-upload="beforeUpload">
          <el-button slot="trigger" size="small" type="primary" round><i class="el-icon-upload el-icon--right"></i> 上传文件</el-button>
          <div slot="tip" class="el-upload__tip">选择 <b>Markdown</b> 文件上传</div>
        </el-upload>
        <markdown-editor ref="editor" :init-val="form.content" @content-changed="contentChanged"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('form')">立即创建</el-button>
        <el-button @click="reset('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import MarkdownEditor from "../../components/MarkdownEditor";

  import {getCookies, removeCookies, setCookies} from "../../utils/cookie";

  export default {
    name: "EditArticle",
    components: {MarkdownEditor},
    data() {
      return {
        form: {
          title: '',
          content: '',
          cover: '',
          tags: '',
          category: '',
          canComment: true,
          publish: true,
          publishNow: true,
          publishTime: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入文章标题', trigger: 'blur'},
            {min: 4, max: 32, message: '长度在 4 到 32 个字符', trigger: 'blur'}
          ],
          tags: [
            {required: true, message: '请输入标签', trigger: 'blur'}
          ],
          category: [
            {required: true, message: '请输入分类', trigger: 'blur'}
          ],
          publishTime: []
        }
      };
    },
    watch: {
      "form.publishNow"(newVal, _) {
        if (!newVal) {
          this.rules['publishTime'] = [
            {required: true, message: '请选择发布日期', trigger: 'blur'}
          ];
        }
      }
    },
    methods: {
      contentChanged(newVal) {
        if (newVal) {
          setCookies("content", newVal, {hours: 2});
        }
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            removeCookies("content");
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      reset(formName) {
        this.$refs[formName].resetFields();
        this.$refs['editor'].setValue("");
      },
      beforeUpload(file) {
        if (!file.name.endsWith(".md")) {
          this.$message.error('只能上传Markdown文件');
        }
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (event) => {
          const content = event.target.result;
          this.$refs['editor'].setValue(content);
        };
        return false;
      }
    },
    created() {
      const unsavedContent = getCookies("content");
      if (unsavedContent) {
        this.$confirm('是否加载未保存的内容?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '本次取消',
          type: 'info'
        }).then(() => {
          this.$refs['editor'].setValue(unsavedContent);
          this.$message({
            type: 'success',
            message: '加载成功!'
          });
        }).catch(() => {
          removeCookies("content");
          this.$message({
            type: 'info',
            message: '已取消!'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
