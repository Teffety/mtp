<template>
  <div id="app">
      <router-view/>
  </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
  beforeMount()
  {
    let page = localStorage.getItem('token') ? '/' : '/login';
    if( localStorage.getItem('token') )
      this.$store.dispatch('auth/getFromStrage')

    this.$router.push({ path: page})
  },
}
</script>
