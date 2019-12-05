<template>
  <div class="home-page">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '../../components/header'
export default {
  components: {
    Header
  }
}
</script>
