<template>
  <div class="flex flex-col bg-white container mx-auto md:px-24 py-14">
    <div class="flex flex-col gap-4" v-if="isLoading">
      <div class="w-72 h-9 animate-pulse bg-gray-300 rounded-md"></div>
      <div class="w-60 h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-36 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    <div class="w-full h-4 animate-pulse bg-gray-300 rounded-md"></div>
    </div>

    <div v-else>
      <div id="heading" class="flex flex-col px-5 md:px-24" >
      <h1
        class="text-center text-2xl font-bold text-slate-700 mx-auto lg:px-32"
      >
        {{ title }}
      </h1>
      <h3 class="mb-4 text-sm font-semibold text-slate-600 text-center">
        Ditulis oleh : {{ writer }}
      </h3>
      <img
        class="overflow-hidden rounded-lg"
        :src="image_url"
        alt="article-image"
      />
    </div>
    
    <div class="flex flex-col px-5 py-4 md:px-24 mt-4" >
      <h2 class="text-start text-sm font-normal text-slate-600">
        <b>Diposting Pada: {{ formatDate(published_at) }}</b>
        <br>
        <span
            class="
              my-2
              bg-blue-100
              text-blue-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
              dark:bg-blue-200 dark:text-blue-800
            "
            >{{ category }}</span
          >
      </h2>
      
    </div>
    <!-- Body Section -->
    <div class="container font-normal px-5 md:px-24 leading-6 text-slate-700">
      <div v-html="body"></div>
      
    </div>
    </div>
  </div>
</template>

<script>
import ArticleCardSkeleton from '~/components/ArticleCardSkeleton';
export default {
  components: { ArticleCardSkeleton },
  
  data(){
    return{
      title:null,
      body:null,
      writer:null,
      image_url:null,
      published_at:null,
      category: null,
      isLoading:true,
      slug: null,
    }
  },
  head () {
    return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.title
          }
        ]
    }
},

  mounted() {
    this.getArticles()
},
  methods:{
    // async pushVisitor(){
    //   const payload = await this.$axios.$post('blog-visitors',{
    //     title: this.title,
    //     slug: this. slug
    //   })
    // },
    async getArticles() {
      this.isLoading = true
      try{
        const payload = await this.$axios.$get(`articles/${this.$route.params.slug}`)
        this.content = payload.data[0].title
        this.title = payload.data[0].title
        this.body = payload.data[0].body
        this.writer = payload.data[0].writer
        this.image_url = payload.data[0].image_url
        this.published_at = payload.data[0].published_at,
        this.category = payload.data[0].category,
        this.isLoading = false
        
        this.$axios.$post('blog-visitors',{
        title: payload.data[0].title,
        slug: payload.data[0].slug
      })
      }catch(error){
        this.isLoading = true
        alert('Maaf gagal memuat artikel')
      }

    },
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    },
  },



};
</script>

<style>
</style>