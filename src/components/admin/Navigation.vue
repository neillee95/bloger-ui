<template>
  <div class="nav">
    <div>
      <el-button class="sidebar-toggle" icon="el-icon-s-fold" circle/>
      <router-link to="/admin" style="font-size: 18px">
        <b>Bloger</b>
      </router-link>
    </div>
    <div class="flex-vertical-center">
      <router-link to="/" style="padding: 8px" title="前往博客">
        Bloger
      </router-link>
      <el-popover
        width="120"
        placement="bottom"
        popper-class="no-padding"
        trigger="hover">
        <ul>
          <li @click="goTo('/admin/system/password')">
            <i class="el-icon-lock"></i>修改密码
          </li>
          <li @click="exit">
            <i class="el-icon-switch-button"></i>退出
          </li>
        </ul>
        <el-avatar slot="reference" :src="avatar"/>
      </el-popover>
    </div>
  </div>
</template>

<script>
import {removeCookies, getCookies} from "@/utils/cookie";
import constant from '@/constant';

export default {
  name: "Navigation",
  data() {
    return {
      avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    };
  },
  methods: {
    goTo(url) {
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    },
    exit() {
      this.$confirm('确定退出?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeCookies(constant.TOKEN_KEY);
        if (!getCookies(constant.TOKEN_KEY)) {
          this.$message.success('已退出');
          this.$router.push('/');
        }
      }).catch(() => {
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 10px 16px;
  background-color: white;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.sidebar-toggle {
  border: none;
  background-color: transparent;
  font-size: 20px;
}

.el-avatar {
  cursor: pointer;
  margin-left: 16px;
}

ul {
  padding: 0;
  margin: 8px 0;
  list-style: none;

  li {
    padding: 12px 16px;
    cursor: pointer;

    i {
      margin-right: 8px;
    }

    & + li {
      border-top: 1px solid #eeeeee;
    }
  }
}
</style>
