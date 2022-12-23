<template>
   <div class="flex flex-col w-screen h-screen bg-gray-100">
      <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">
        Ganti Password
      </h1>

      <div class="flex flex-col gap-4 mx-auto my-auto">
       
        <div class="flex flex-col">
            <label class="text-lg font-bold text-slate-700" for="newPassword">Masukkan Password Baru</label>
            <input class="p-2 text-lg text-slate-500 rounded-md" type="password" id="newPassword" v-model="form.password"/>
        </div>
        <div class="flex flex-col">
            <label class="text-lg font-bold text-slate-700" for="newPassword">Masukkan Kembali Password Baru</label>
            <input class="p-2 text-lg text-slate-500 rounded-md" type="password" id="newPassword" v-model="passwordMatch"/>
        </div>

        <button class="bg-slate-500 p-2 rounded-md hover:bg-slate-600 text-white" @click="update(loggedInUser.id)">
            Ubah
        </button>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    layout: 'adminDefault',
    computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
    data(){
        return{
            passwordMatch: '',
            form:{
                id : null ,
                password: null,
            }
        }
    },

    methods:{
        async update(id){
            if(this.form.password != this.passwordMatch){
                alert('Password Tidak Sesuai!')
            }else if(!this.form.password){
                alert('Password Tidak Boleh Kosong!')
            }
            else{
                try{
                    let response = await this.$axios.$put('change-password', {
                        "id": id,
                        "password": this.form.password
                    })
                    alert('Berhasil Mengubah Password')
                    this.$router.push('/admin')
                }catch(error){
                    alert('Terjadi kesalahan, mohon coba lagi')
                }
            }
            
        }
    }
}
</script>

<style>

</style>