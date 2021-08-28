import {saveArticle, updateArticle} from "@/apis/admin/article";
import {getArticle} from '@/apis/article';
import response from "@/apis/response";

const mixin = {
  data() {
    return {
      articleId: this.$route.params['id'],
      isCreate: this.$route.params['id'] === undefined,
      form: {
        title: '',
        content: '',
        cover: '',
        tags: [],
        type: '原创',
        canComment: true,
        publish: true
      },
      rules: {
        title: [
          {required: true, message: '请输入文章标题', trigger: 'blur'},
          {min: 4, message: '至少 4 个字符', trigger: 'blur'}
        ]
      },
      inputVisible: false,
      tagInput: '',
      submitting: false
    };
  },
  computed: {
    inputTagMargin() {
      return (!this.form.tags || this.form.tags.length === 0) ? 0 : '10px';
    }
  },
  beforeRouteUpdate() {
    this.fetchArticle()
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'createArticle' || to.name === 'editArticle') {
      location.href = to.fullPath
    }
    next()
  },
  created() {
    if (!this.isCreate) {
      this.fetchArticle()
    }
    this.$nextTick(() => {
      this.$refs['title'].focus();
    });
  },
  methods: {
    fetchArticle() {
      getArticle(this.articleId).then(({data}) => {
        this.form = data.data;
      });
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitting = true
          if (this.$route.params['id']) {
            this.updateArticle();
          } else {
            this.createArticle();
          }
        } else {
          return false;
        }
      });
    },
    reset(formName) {
      this.$refs[formName].resetFields();
      this.form.content = '';
    },
    beforeUpload(file) {
      if (file.name.endsWith(".md")) {
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (event) => {
          this.form.content = event.target.result;
        };
      } else {
        this.$message.error('只能上传Markdown文件');
      }
      return false;
    },
    createArticle() {
      saveArticle(this.form).then(({data}) => {
        if (data && data.code === response.success) {
          const articleId = data.data.id
          this.$message.success('创建成功');
          this.$router.push(`/admin/article/${articleId}/preview`);
        } else {
          this.$message.error('创建失败');
        }
      }).finally(() => {
        this.submitting = false
      });
    },
    updateArticle() {
      updateArticle(this.$route.params['id'], this.form).then(({data}) => {
        if (data && data.code === response.success) {
          const articleId = data.data.id
          this.$message.success('更新成功');
          this.$router.push(`/admin/article/${articleId}/preview`);
        } else {
          this.$message.error('更新失败');
        }
      }).finally(() => {
        this.submitting = false
      });
    },
    handleClose(tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let tagInput = this.tagInput;
      if (tagInput) {
        this.form.tags.push(tagInput);
      }
      this.inputVisible = false;
      this.tagInput = '';
    }
  }
};

export default mixin;
