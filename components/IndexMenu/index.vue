<template>
  <div class="menu-header-container">
    <a-row class="menu-header-content">
      <a-col :xl="2">
        <!-- logo -->
        <h1 class="logo">Blog</h1>
      </a-col>
      <a-col :xl="12" :style="{ height: '70px' }">
        <a-menu
          v-model="current"
          mode="horizontal"
          :style="{
            backgroundColor: 'transparent',
            height: '100%',
            borderBottom: 'none',
          }"
        >
          <a-menu-item key="/">
            <nuxt-link to="/" class="item-content"
              ><a-icon
                type="home"
                :style="{ fontSize: '14px' }"
              />首页</nuxt-link
            >
          </a-menu-item>
          <a-menu-item key="/sort">
            <nuxt-link to="/sort" class="item-content"
              ><a-icon
                type="appstore"
                :style="{ fontSize: '14px' }"
              />分类</nuxt-link
            >
          </a-menu-item>
          <a-menu-item key="/backfile">
            <nuxt-link to="/backfile" class="item-content"
              ><a-icon
                type="hdd"
                :style="{ fontSize: '14px' }"
              />归档</nuxt-link
            >
          </a-menu-item>
          <a-menu-item key="/about">
            <nuxt-link to="/about" class="item-content"
              ><a-icon
                type="user"
                :style="{ fontSize: '14px' }"
              />关于我</nuxt-link
            >
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :xl="10" style="text-align: right">
        <a-input-search
          placeholder="搜索文章"
          style="width: 300px; height: 40px; text-align: left; color: #fff"
          class="menu-sreach-box"
          @search="onSearch"
        />
        <nuxt-link to="/login" style="margin-right: 20px"
          ><span class="login-box">登录</span></nuxt-link
        >
        <a-switch default-checked>
          <a-icon slot="checkedChildren" type="alert" />
          <a-icon slot="unCheckedChildren" type="bulb" />
        </a-switch>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      current: [this.$route.path],
    };
  },
  computed: {
    monitor() {
      return this.$store.state.scrollMoveSpace;
    },
  },
  watch: {
    monitor() {
      let val = Number(
        ((this.$store.state.scrollMoveSpace - 180) / 12 / 10).toFixed(1)
      );
      this.$store.commit(
        "setMenuColor",
        "rgba(24,26,28," + (val <= 0 ? 0 : val >= 1 ? 1 : val) + ")"
      );
    },
  },
  methods: {
    onSearch(text: String): void {
      console.log(text);
    },
  },
});
</script>

<style>
@media screen and (min-width: 240px) {
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 1400px) {
  .menu-header-container {
    position: fixed;
    z-index: 9999;
    height: 70px;
    width: 100%;
    line-height: 64px;
  }
  .menu-header-content {
    width: 1400px;
    margin: 0 auto;
  }
  .logo {
    font-family: Axure Handwriting;
    font-size: 32px;
    color: #2ea59c;
    font-weight: bold;
  }
  /* 导航栏 */
  .ant-menu-item {
    margin-top: 10px !important;
    margin-right: 20px;
    border-bottom: none !important;
    border-radius: 5px;
    color: #fff;
  }
  .ant-menu-item-selected {
    border: none;
    background-color: rgba(0, 0, 0, 0.7);
    color: #2ea59c !important;
  }
  .ant-menu-item-active {
    border: none;
    background-color: rgba(0, 0, 0, 0.7) !important;
    color: #2ea59c !important;
  }
  .item-content {
    font-size: 14px;
    color: #fff !important;
  }
  .ant-menu-item-selected .item-content {
    color: #2ea59c !important;
  }
  .ant-menu-item-active .item-content {
    color: #2ea59c !important;
  }
  .menu-sreach-box {
    margin-right: 20px;
  }
  .menu-sreach-box .ant-input {
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .menu-sreach-box .ant-input-suffix > i {
    color: #fff;
  }
  .menu-sreach-box .ant-input:hover {
    border-color: #2ea59c !important;
  }
  .menu-sreach-box .ant-input::selection {
    border-color: #2ea59c !important;
    outline: #2ea59c !important;
  }

  .login-box {
    font-size: 16px;
    color: #fff;
  }
  .ant-switch-checked {
    background-color: #2ea59c !important;
  }
}
</style>
