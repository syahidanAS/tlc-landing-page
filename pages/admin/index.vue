<template>
  <div class="w-screen h-screen bg-gray-200">
   
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