<template>
  <div class="contact-page">
    <div class="groupBanner">
      <img src="../../assets/images/introduction.jpg" alt="" />
    </div>
    <GroupTabs />
    <div class="contactContent main">
      <div class="contactInfo">
        <p>
          <em>地址：</em>
          "广东佛山顺德区大良街道德胜东路3号西安交通大学研究院综合楼7楼"
          <br />
          <em>电话：</em>
          "0757-22912849 "
          <br />
          <em>传真：</em>
          "0757-22118866 "
          <br />
          <em>网址：</em>
          <a href="http://www.bndxqc.com">http://www.bndxqc.com</a>
          <br />
        </p>

        <img src="../../assets/images/map.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import GroupTabs from '../../components/groupTabs'
export default {
  name: 'contactUs',

  components: {
    GroupTabs
  }
}
</script>

<style lang="scss">
.contact-page {
  .groupBanner {
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
  }

  .contactInfo {
    padding: 40px;

    p {
      line-height: 300%;
      font-size: 16px;

      em {
        font-weight: bold;
      }

      a{
        text-decoration: none;
        color: #000;
      }

      a:hover{
        color:#cc0000;
      }
    }
  }
}
</style>
