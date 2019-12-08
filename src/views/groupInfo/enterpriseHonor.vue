<template>
    <div class="honor">
       <div class="groupBanner">
      <img src="../../assets/images/introduction.jpg" alt="" />
    </div>
    <GroupTabs/>
    <div class="honorContent">
      <div class="honorPic main">
        <img src="../../assets/images/honor.jpg" alt="">
      </div>
    </div>
    </div>
</template>

<script>
import GroupTabs from '../../components/groupTabs'
export default {
  name: 'enterpriseDevelop',

  components: {
    GroupTabs
  }
}
</script>

<style lang="scss">
.honor{

   .groupBanner {
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
   }

   .honorContent{
      width: 100%;
      height: 3226px ;
      .honorPic{
        vertical-align: top;
      }
   }

}
</style>
