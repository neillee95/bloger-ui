import {login} from "@/apis/admin/login";
import response from "@/apis/response";
import sha256 from 'js-sha256';

const mixin = {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      submitting: false,
    }
  },
  methods: {
    handleSubmit() {
      if (this.form.username && this.form.password) {
        this.submitting = true;
        // Hash password with sha256, avoid using plaintext password
        const form = Object.assign({}, this.form);
        form.password = sha256.sha256(form.password);
        login(form).then(({data}) => {
          if (data && data.code === response.success) {
            const redirect = this.$route.query["redirect"] || "/admin";
            this.$message.success("登录成功");
            this.$router.replace(redirect);
          } else {
            this.$message.error("登录失败");
          }
        }).finally(() => {
          this.submitting = false;
        });
      }
    }
  },
  created() {
    document.title = 'LOGIN';
  }
};

export default mixin;
