import {saveArticle, updateArticle, getArticle} from "@/apis/admin/article";
import response from "@/apis/response";

const mixin = {
  data() {
    return {
      form: {
        title: '',
        content: '',
        cover: '',
        tags: [],
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
      },
      inputVisible: false,
      inputValue: ''
    };
  },
  computed: {
    inputTagMargin() {
      return this.form.tags.length === 0 ? 0 : '10px';
    }
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
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
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
          this.$message.success('创建成功');
          setTimeout(() => {
            this.$router.push('/admin/articles');
          }, 1000);
        } else {
          this.$message.error('创建失败');
        }
      });
    },
    updateArticle() {
      updateArticle(this.$route.params['id'], this.form).then(({data}) => {
        if (data && data.code === response.success) {
          this.$message.success('更新成功');
          setTimeout(() => {
            this.$router.push('/admin/articles');
          }, 1000);
        } else {
          this.$message.error('更新失败');
        }
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
      let inputValue = this.inputValue;
      if (inputValue) {
        this.form.tags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  },
  created() {
    const articleId = this.$route.params['id'];
    if (articleId) {
      getArticle(articleId).then(({data}) => {
        this.form = data.data;
      });
    }
  }
};

export default mixin;
