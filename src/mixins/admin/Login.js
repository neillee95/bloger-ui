import {login} from "@/apis/admin/login";
import response from "@/apis/response";

const mixin = {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.form.username && this.form.password) {
        login(this.form).then(({data}) => {
          if (data && data.code === response.success) {
            const redirect = this.$route.query["redirect"] || "/admin";
            this.$message.success("登录成功");
            this.$router.replace(redirect);
          } else {
            this.$message.error("登录失败");
          }
        });
      }
    }
  },
  created() {
    document.title = 'LOGIN';
  }
};

export default mixin;
