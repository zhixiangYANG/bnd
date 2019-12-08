<template>
  <div class="Customers-page">
    <div class="groupBanner">
      <img src="../../assets/images/introduction.jpg" alt="" />
    </div>
    <GroupTabs />
    <div class="customersContent main">
      <img src="../../assets/images/companyCustomer.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import GroupTabs from '../../components/groupTabs'
export default {
  name: 'enterpriseCustomers',

  components: {
    GroupTabs
  }
}
</script>

<style lang="scss">
.Customers-page {
  .groupBanner {
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
  }

  .customersContent {
    img {
      vertical-align: top;
    }
  }
}
</style>
