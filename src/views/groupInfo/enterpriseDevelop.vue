<template>
  <div class="groupDevelop">
    <div class="groupBanner">
      <img src="../../assets/images/introduction.jpg" alt="" />
    </div>
    <GroupTabs/>
    <div class="Develop">
      <div class="DevelopPic main">
        <img src="../../assets/images/companyDevelop.jpg" alt="">
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
.groupDevelop{

   .groupBanner {
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
   }

   .Develop{

     .DevelopPic{
       img{
         vertical-align: top;
       }
     }
   }
}
</style>
