<template>
  <div class="groupInfo-page">
    <div class="groupBanner">
      <img src="../../assets/images/introduction.jpg" alt="" />
    </div>
    <GroupTabs />
    <div class="groupContent">
        <div class="groupIntroduce main">
          <div class="groupWord">
            <p>佛山市博纳德信息科技有限公司是博纳德投资管理集团有限公司的全资子公司，总部位于广东深圳前海，事业部经营本部位于佛山市顺德区与安徽省芜湖，现集团控股公司100多家，现业务现覆盖全国180多个城市，已全面覆盖广东省珠三角地区，及省外地区，服务员工达数万人。 集团公司始于1992年，经过20余年的精耕细作，目前已发展成为一家提供专业化服务外包为核心的多元化的企业，以客户需求为导向的综合性集团公司。博纳德信息科技是以互联网平台为依托的,为雇主提供商务流程服务管理的现代互联网科技公司，目前集团业务涉及七大业务板块，包括：业务流程外包BPO、人才用工配置信息服务、智慧工厂服务，通信平台服务，安居安全管理服务、金融及投资服务、职业教育投资服务； 我们有计划的在全国建立服务网络，现已经在全国40多个主要的城市设立了分子公司，以更好的服务于全国的客户。我们是一家年轻的公司，在市场经济的大环境下，我们始终保持着稳健的发展步伐，洞察每一个发展机遇，出巨资打造自己的网络商务平台，依托大数据为客户量身定制服务方案，做到服务便捷、快速！ 现诚邀志同道合的您，与公司共同成长发展，为打造“最佳雇主商务流程服务管理商”的品牌而努力。</p>
          </div>
          <div class="groupImg">
            <img src="../../assets/images/jtjsPic.jpg" alt="">
          </div>
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import GroupTabs from '../../components/groupTabs'
export default {
  name: 'groupInfo',

  components: {
    GroupTabs
  }
}
</script>

<style lang="scss">
.groupInfo-page {
  .groupBanner {
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
  }

  .groupContent{
    width: 100%;
    height: 424px;

    .groupIntroduce{
      height: 334px;
      padding: 45px 0;
      overflow: hidden;

        .groupWord{
          float: left;
          width: 60%;

          p{
            text-indent: 2em;
            line-height: 240%;
            font-size: 14px;
          }
        }

        .groupImg{
          float: right;
        }
    }
  }
}
</style>
