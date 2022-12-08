<template>
  <div>
    <h1>This is Dashboard Page</h1>
    
    <h2 v-if="isAuthenticated">Hallo, Selamat Datang </h2>
    <h2 v-else>Anda harus login terlebih dahulu</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout:'adminDefault',
  computed:{
    ...mapGetters([ 'isAuthenticated', 'loggedInUser' ])
  },
  methods:{
    async logout(){
      await this.$auth.logout();
    }
  }
}
</script>


<style>

</style>