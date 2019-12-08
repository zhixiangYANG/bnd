<template>
  <div class="Culture-page">
    <div class="groupBanner">
      <img src="../../assets/images/introduction.jpg" alt="" />
    </div>
    <GroupTabs />
    <div class="cultureContent main">
        <img src="../../assets/images/companyCulture.png" alt="">
    </div>
  </div>
</template>

<script>
import GroupTabs from '../../components/groupTabs'
export default {
  name: 'enterpriseCulture',

  components: {
    GroupTabs
  }
}
</script>

<style lang="scss">
.Culture-page {
  .groupBanner {
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
  }

  .cultureContent{
    img{
      vertical-align: top;
    }
  }
}
</style>
