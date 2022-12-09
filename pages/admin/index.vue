<template>
  <div>
    <h1>This is Dashboard Page</h1>
    
    <h2 >Hallo, Selamat Datang {{ loggedInUser.name }}</h2>

    <button class="p-2 bg-sky-500 rounded-md " @click="logout()">Kaluar anjir</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
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