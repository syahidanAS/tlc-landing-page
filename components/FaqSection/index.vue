<template>
  <section class="bg-white py-24 md:py-8" id="faq">
    <div
      class="
        container
        flex flex-col-reverse
        px-4
        md:flex-row
        items-center
        md:pt-14 md:px-20
        mx-auto
        space-y-0
        2xl:px-44
        md:space-y-0 md:mb-10
      "
    >
      <!-- Left Item -->
      <div
        class="
          flex flex-col
          mt-6
          w-full
          space-y-8
          md:mt-0 md:w-1/2
          shadow-sm shadow-slate-700
          py-2
          md:pt-8
        "
      >
      <!-- Skeleton Faqs -->
      <div class="flex flex-col gap-4" v-if="isLoading">
        <div class="animate-pulse bg-gray-300 h-8 mx-4 rounded-md" v-for="skel in faqSkeletons" :key="skel.index" >
        
      </div>
      </div>

      <!-- Main Faqs -->
        <div
          class="flex flex-col cursor-pointer "
          v-for="item in faqs.slice(0,4)" :key="item.index" v-on:click="(item.is_open = !item.is_open)"
          v-else
        >
          <div class="flex flex-row justify-between px-3 ">
            <h1 class="text-md font-semibold text-slate-800">
              {{ item.question }}
            </h1>
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-up-slate-24.png"
              alt=""
              v-if="item.is_open"
            />
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-down-slate-24.png"
              alt=""
              v-else
            />
          </div>
          
          <div class="px-3 mt-6 divide-y" v-if="item.is_open" >
            
            <p class="text-md text-slate-600">
              {{ item.answer }}
            </p>
          </div>
        </div>

        <div class="flex flex-col cursor-pointer">
          <div class="flex flex-row justify-end px-3">
            <NuxtLink
              to="/faqs"
              class="text-md font-semibold text-blue-500 hover:text-blue-700"
            >
              Selengkapnya
            </NuxtLink>
          </div>
        </div>
      </div>
      
     
      <!-- Image -->
      <div class="md:w-1/2">
        <h1
          class="text-center text-2xl md:text-4xl font-semibold text-slate-700"
        >
          Tanya Jawab
        </h1>
        <img class="mx-auto" src="~/assets/images/pointing-girl.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      notFound: false,
      faqs:[],
      isOpen: true,
      faqSkeletons:{
        item1:{},
        item2:{},
        item3:{},
        item4:{},
      }
    };
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