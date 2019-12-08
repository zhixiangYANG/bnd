<template>
  <div class="groupTabs">
    <div class="groupNav main">
       <ul >
          <router-link tag="li" to="/groupInfo">
            <span>公司简介</span>
          </router-link>
          <router-link tag="li" to="/enterpriseDevelop">
            <span>发展历程</span>
          </router-link>
          <router-link tag="li" to="/enterpriseHonor">
            <span>公司荣誉</span>
          </router-link>
          <router-link tag="li" to="/enterpriseCulture">
            <span>企业文化</span>
          </router-link>
          <router-link tag="li" to="/enterpriseCustomers">
            <span>合作伙伴</span>
          </router-link>
          <router-link tag="li" to="/contactUs">
            <span>联系我们</span>
          </router-link>
        </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/style/common/mixins.scss';
.groupTabs{
  height: 60px;
  border-bottom: 1px solid #e4e4e4;
  .groupNav{
      height: 60px;

      li {
        float: left;
        height: 62px;
        font-size: 14px;
        color: #333333;
        line-height: 62px;
        margin: 0 20px;

        &.router-link-exact-active {
          color: #059ce5;
          @include border2;
        }
        &.router-link-exact-active:hover {
          color: #059ce5;
        }
      }

      li:hover {
        color: #cc0000;
        cursor: pointer;
      }
    }
  }
</style>
