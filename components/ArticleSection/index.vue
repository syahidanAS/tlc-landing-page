<template>
  <section
    id="articles"
    class=" px-5 md:px-0 pt-2 bg-white pb-0 md:pb-20 lg:px-32 md:pt-0 items-center"
  >
    <h2 class="text-slate-700 text-2xl font-bold text-center md:text-slate-600">
      Artikel dan Berita Terbaru
    </h2>
    <div class="flex flex-col md:flex-row px-0 pb-12 gap-4 mt-4 md:px-24 2xl:mx-52 md:pb-0">
      <div class="flex-1 p-4" v-if="isLoading">
      <div class="block bg-white overflow-hidden border-2 h-full rounded-md ">
        <div class="">
          <div class="w-full h-40 animate-pulse bg-gray-300 "></div>
          <div class="w-44 h-4 animate-pulse bg-gray-300 rounded-md my-2 mx-4"></div>

          <div class="w-24 h-4 animate-pulse bg-gray-300 rounded-md mx-4"></div>
        </div>
        <div class="p-4 flex flex-wrap items-center">
          <div class="w-24 h-4 animate-pulse bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
    <div class="flex-1 p-4 " v-if="isLoading">
      <div class="block bg-white overflow-hidden border-2 h-full rounded-md ">
        <div class="">
          <div class="w-full h-40 animate-pulse bg-gray-300 "></div>
          <div class="w-44 h-4 animate-pulse bg-gray-300 rounded-md my-2 mx-4"></div>

          <div class="w-24 h-4 animate-pulse bg-gray-300 rounded-md mx-4"></div>
        </div>
        <div class="p-4 flex flex-wrap items-center">
          <div class="w-24 h-4 animate-pulse bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
    <div class="flex-1 p-4 " v-if="isLoading">
      <div class="block bg-white overflow-hidden border-2 h-full rounded-md ">
        <div class="">
          <div class="w-full h-40 animate-pulse bg-gray-300 "></div>
          <div class="w-44 h-4 animate-pulse bg-gray-300 rounded-md my-2 mx-4"></div>

          <div class="w-24 h-4 animate-pulse bg-gray-300 rounded-md mx-4"></div>
        </div>
        <div class="p-4 flex flex-wrap items-center">
          <div class="w-24 h-4 animate-pulse bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
      
 


      <!-- Article 1 -->
      <div class="max-w-sm bg-white border-gray-200 rounded-lg shadow-md overflow-hidden w-full md:w-80 mx-auto" v-for="item in articles.slice(0,3)" :key="item.index" v-else>
        <NuxtLink :to="`/articles/${item.slug}`">
          <img
            class="w-full h-44 hover:opacity-95"
            :src="item.image_url"
            alt=""
          />
        </NuxtLink>
        <div class="p-5">
        
            <NuxtLink
              class="mb-2 text-lg text-slate-800 font-semibold tracking-tight hover:underline" :to="`/articles/${item.slug}`"
            >
              {{ item.title }}
        </NuxtLink>
        <br>
        
          <span
            class="
              bg-blue-100
              text-blue-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
              dark:bg-blue-200 dark:text-blue-800
            "
            >{{ item.category }}</span>
            <br>
            <span class="text-sm my-2 text-slate-700 ">27 November 2022</span>
        </div>
      </div>

  
    </div>
    <div class="mt-0 md:mt-6 w-full text-center">
      <NuxtLink class="py-2 px-3 border-2 border-sky-500 my-4 text-blue-500 font-semibold rounded-md hover:bg-sky-500 hover:text-white" to="/articles">Tampilkan Lebih Banyak</NuxtLink>
    </div>
  </section>
  
</template>

<script>
import ArticleCardSkeleton from '~/components/ArticleCardSkeleton';
export default {
  components: { ArticleCardSkeleton },
  data(){
    return{
      articles:[],
      isLoading:true
    }
  },
  mounted() {
    this.getArticles()
},
  methods:{
    async getArticles() {
      this.isLoading = true
      try{
        const payload = await this.$axios.$get('published/articles')
        this.articles = payload.data
        this.isLoading = false
      }catch(error){
        this.isLoading = true
        alert('Maaf gagal memuat artikel')
      }

    },
  },



};
</script>


<style>
</style>