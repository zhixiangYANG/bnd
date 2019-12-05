<template>
  <div class="header">
    <div class="container main">
      <div class="logo">
        <img src="../assets/images/logo.png" />
      </div>
      <div class="nav">
        <ul>
          <router-link tag="li" to="/">
            <span>首页</span>
          </router-link>
          <router-link tag="li" to="/groupInfo">
            <span>集团介绍</span>
          </router-link>
          <router-link tag="li" to="/business">
            <span>业务布局</span>
          </router-link>
          <router-link tag="li" to="/newsCenter">
            <span>新闻中心</span>
          </router-link>
          <router-link tag="li" to="/joinUs">
            <span>加入我们</span>
          </router-link>
        </ul>
      </div>
      <div class="platform">
        <router-link tag="li" to="/login">
          <span>薪起程管理平台</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/style/common/mixins.scss';

.header {
  width: 100%;
  height: 88px;
  background: #fff;
  border-bottom: 2px solid #059ce5;

  .container {
    height: 82px;

    .logo {
      float: left;
    }

    .nav {
      float: left;
      margin-left: 50px;

      li {
        float: left;
        height: 70px;
        font-size: 18px;
        color: #666666;
        line-height: 70px;
        margin: 0 15px;
        padding: 0 20px;

        &.router-link-exact-active {
          color: #059ce5;
          @include border;
        }
      }

      li:hover {
        color: #059ce5;
        @include border;
      }
    }

    .platform {
      float: right;
      margin-top: 25px;
      color: #999999;

      li {
        list-style: none;
        margin: 0 10px;
      }

      span {
        background: url('../assets/images/right.png') 115px center no-repeat;
        margin: 0 10px;
        padding: 0 20px 0 0;
        font-size: 16px;
        cursor: pointer;
      }

      span:hover {
        color: #cc0000;
      }
    }
  }
}
</style>
