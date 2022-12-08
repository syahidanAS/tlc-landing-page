<template>
  <div class="flex flex-col container mx-auto p-6 px-52 gap-6">
    <Notification :message="error" v-if="error"/>
    <form method="post" @submit.prevent="login">
    <input class="border-sky-500 p-4" placeholder="Email" type="email" name="email" v-model="email">
    <input class="border-sky-500 p-4" placeholder="Password" type="password" name="password" v-model="password">
    <button class="p-4 bg-slate-700 rounded-md hover:bg-slate-600 text-white text-lg ">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    layout:'adminDefault',
    auth: false,
    middleware: 'guest',
    data (){
        return{
            email: '',
            password: '',
            error: null
        }
    },
    methods:{
        async login(){
            try{
                const result = await this.$auth.loginWith('local',{
                data:{
                    email: this.email,
                    password: this.password
                }
                })
                console.log(result);
                    this.$router.push('/dashboard')
            }catch({error}){
               console.log(error);
            }
            // this.$auth.loginWith('local', {
            //     data:{
            //         email: this.email,
            //         password: this.password
            //     }
            // }).then(() => {
            //     this.$router.push('/dashboard')
            // })
        }
    },
    mounted(){
        console.log(this.$auth);
    }
}
</script>

<style>

</style>