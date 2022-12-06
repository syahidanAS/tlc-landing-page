<template>
  <div>
    <h1>This is Dashboard Page</h1>
    
    <h2 v-if="isAuthenticated">Hallo, Selamat Datang </h2>
    <h2 v-else>Anda harus login terlebih dahulu</h2>
  </div>
</template>

<script>


export default {
  layout:'adminDefault',
}
</script>


<style>

</style>