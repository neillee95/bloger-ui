<template>
  <div class="footer">
    <el-row>
      <el-col :xs="0" :md="2"/>
      <el-col :xs="24" :md="20">
        <el-row>
          <el-col :xs="24" :md="12">
            <div class="item" v-html="preference.footer"></div>
            <div v-if="Array.isArray(preference.social)">
              <span class="social" v-for="(item, index) in preference.social" :key="index">
                <a :href="item.split('$$')[1]" target="_blank">
                  <svg class="icon" aria-hidden="true">
                    <use :xlink:href="'#icon-' + item.split('$$')[0]"/>
                  </svg>
                </a>
              </span>
            </div>
          </el-col>
          <el-col :xs="24" :md="12">
            <div class="item">{{metrics.visitors}} 访问</div>
            <div class="item">{{metrics.articles}} 文章</div>
            <div class="item">{{metrics.comments}} 评论</div>
            <div class="item">{{metrics.messages}} 留言</div>
          </el-col>
        </el-row>
        <div style="text-align: center; margin-top: 8px">
          <a href="javascript:" @click="$router.push({name: 'dashboard'})">开始使用</a>
        </div>
        <div style="text-align: center; margin-top: 8px">
          Powered by <a href="https://github.com/neillee95/bloger">Bloger</a>
        </div>
      </el-col>
      <el-col :xs="0" :md="2"/>
    </el-row>
  </div>
</template>

<script>
  import {getMetrics} from "@/apis/metrics";
  import {newVisitors} from "@/apis/statistics";
  import response from "@/apis/response";
  import {setCookies, getCookies} from "@/utils/cookie";
  import detectCountry from "@/utils/country";
  import detectBrowser from "@/utils/browser";

  export default {
    name: "Footer",
    props: {
      preference: {
        required: true,
        type: Object
      }
    },
    data() {
      return {
        metrics: {}
      }
    },
    methods: {
      getMetrics() {
        getMetrics().then(({data}) => {
          if (data && data.data) {
            this.metrics = data.data;
          }
        });
      },
      newVisitors() {
        if (getCookies('visited')) {
          return;
        }
        const visitor = {};
        detectCountry(
          country => {
            visitor['country'] = country;
            const browser = detectBrowser();
            visitor['browser'] = browser.name + ' ' + browser.version;
            newVisitors(visitor).then(({data}) => {
              if (data.code === response.success) {
                console.log('new visitor!');
                setCookies('visited', true, {hours: 1});
              }
            });
          }
        );
      }
    },
    created() {
      this.getMetrics();
      this.newVisitors();
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding: 24px 16px;
    background-color: white;
  }

  .el-col {
    min-height: 1px;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
    display: inline-block;
    height: 32px;
    line-height: 32px;

    &:hover {
      color: #eb5055;
    }
  }

  .item {
    margin-bottom: 8px;
  }

  .social {
    margin-right: 12px;
    font-size: 1.2em;
  }
</style>
