<template>
  <div class="nav">
    <el-row>
      <el-col :xs="0" :sm="2"/>
      <el-col :xs="24" :sm="20">
        <el-row>
          <el-col class="nav-title" :xs="20" :sm="12">
            <router-link class="title" to="/">Lee's Blog</router-link>
          </el-col>
          <el-col class="nav-menu" :xs="0" :sm="12">
            <router-link class="nav-menu-item" to="/tags">Tags</router-link>
            <router-link class="nav-menu-item" to="/archives">Archives</router-link>
            <router-link class="nav-menu-item" to="/aboutme">About me</router-link>
          </el-col>
          <el-col class="nav-drawer-toggle" :xs="4" :sm="0">
            <el-button class="nav-drawer-toggle-button" icon="el-icon-s-unfold" circle @click="openDrawer"/>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="2"/>
      <el-col :xs="24" :sm="0">
        <el-drawer title="Lee's Blog"
                   :visible.sync="open"
                   :before-close="handleClose"
                   :direction="direction">
          <list :items="items"/>
        </el-drawer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import List from "../components/List";
  import {mapMutations, mapState} from 'vuex';

  export default {
    name: "Navigation",
    components: {List},
    data() {
      return {
        direction: 'ttb',
        items: [
          {title: 'Tags', path: '/tags'},
          {title: 'Archives', path: '/archives'},
          {title: 'About Me', path: '/aboutme'}
        ]
      }
    },
    computed: {
      ...mapState({
        open: 'openDrawer'
      })
    },
    methods: {
      ...mapMutations([
        'openDrawer',
        'closeDrawer'
      ]),
      handleClose() {
        this.closeDrawer();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/navigation.scss";
</style>
