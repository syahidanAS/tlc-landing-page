<template >
  <div class="flex flex-col bg-white container mx-auto px-5 md:px-24 py-14 lg:pb-52 2xl:py-52">
    <h1 class="text-2xl font-bold text-slate-700">Frequently Asked Question</h1>
    <h2 class="text-slate-600 font-normal mt-2 text-sm">
      Pertanyaan yang sering ditanyakan seputar The Bright Learning Center.
    </h2>

    <div class="flex flex-row mt-4">
      <input class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none focus:shadow-outline
        " id="find" type="text" placeholder="Cari pertanyaan" />
      <button class="px-6 rounded-md bg-sky-500 text-white hover:bg-sky-600 mx-2">
        Cari
      </button>
    </div>
    <!-- Content -->
   
      <div class="grid lg:grid-cols-12 gap-5 my-5">
        <main class="md:col-span-9 px-2 border-[1px] border-slate-300 rounded-md" >


          <div class="flex flex-col rounded-md shadow-sm shadow-slate-400 p-2 my-2" v-for="item in faqs" :key="item.index" @click="toggle()">
            <div class="
              flex flex-row    
              text-slate-700
              justify-between
              items-center
              hover:cursor-pointer
            ">
              <h1 class="text-sm font-semibold">
                {{ item.question }}
              </h1>
              <img class="w-3 h-3" src="~/assets/images/arrow-down-slate-24.png" alt="arrow" />
            </div>

            <div class="px-2 text-sm text-slate-600 my-4 border-t-[1px] py-2" :class="accordionClasses">
              <p>{{ item.answer }}</p>
            </div>
          </div>
          
          
          
        </main>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      index: true,
      isLoading: false,
      nostFound: false,
      faqs:[],
      isOpen: true,
      accordionClasses:'hidden'
    }
  },
  methods:{
    toggle(){
      if(this.accordionClasses == 'hidden'){
        this.accordionClasses = ''
      }else{
        this.accordionClasses = 'hidden'
      }
    },
    async getFaqs(){
      this.isLoading = true
      try{
        this.notFound = false
        const payload = await this.$axios.$get('faqs')
        if(payload.data.length > 0){
          this.notFound = false
          this.faqs = payload.data
          this.isLoading = false
        }else{
          this.isLoading = false
          this.notFound = true

        }
      }catch(error){
        this.isLoading = true
        this.notFound = true
      }
    },
  },
  mounted(){
    this.getFaqs();
  },

};
</script>

<style>

</style>