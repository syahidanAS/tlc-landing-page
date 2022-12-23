<template>
  <div class="flex flex-col bg-white container mx-auto md:px-24 py-14">
    <div class="flex flex-col lg:grid lg:grid-flow-col gap-3 ">
  <div class="col-span-4">
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
      <div id="heading" class="flex flex-col px-5 md:px-16" >
      <h1
        class="text-2xl font-bold text-slate-700 "
      >
        {{ title }}
      </h1>
      <h3 class="mb-4 text-sm font-normal text-slate-600">
        Ditulis oleh : {{ writer }}
      </h3>
        <img
        class="overflow-hidden rounded-lg"
        :src="image_url"
        alt="article-image"
      />
    </div>
    
    <div class="flex flex-col px-5 py-4 md:px-16 mt-4" >
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
              
            "
            >{{ category }}</span
          >
      </h2>
      
    </div>
    <!-- Body Section -->
    <div class="container font-normal px-5 md:px-16 leading-6 text-slate-700">
      <div v-html="body"></div>
      
    </div>

    <div class="
          invisible
          md:visible
          flex 
          flex-col           
          fixed
          z-50
          top-44
          md:left-20
          lg:left-32
          2xl:left-72
          gap-2
          "
          v-if="!isLoading"
          >
      <a title="Bagikan Ke Facebook" class="bg-[#3B5998] hover:bg-[#294277] rounded-full p-2 w-9 " :href="`https://www.facebook.com/sharer/sharer.php?u=${siteUrl+'articles/'+slug}`" target="_blank">
        <img src="~/assets/images/facebook.svg" alt="">
      </a>

      <a title="Bagikan Ke Twitter" class="bg-[#03A9F4] hover:bg-[#62b8e0] rounded-full p-2 w-9" :href="`https://twitter.com/intent/tweet?url=${siteUrl +'articles/'+ slug}`" target="_blank">
        <img src="~/assets/images/twitter.svg" alt="">
      </a>

      <a title="Bagikan Ke Whatsapp" class="bg-[#4CAF50] hover:bg-[#419c45] rounded-full p-2 w-9" :href="`https://api.whatsapp.com/send?text=${siteUrl +'articles/'+ slug}`" target="_blank">
        <img src="~/assets/images/whatsapp.svg" alt="">
      </a>

      <button title="Salin Link" class="bg-slate-600 hover:bg-slate-700 rounded-full p-2 w-9" target="_blank" @click="copy(url=`${siteUrl+'articles/'+slug}`)">
        <img src="~/assets/images/link.svg" alt="">
      </button>
    </div>

    <div class="
          visible
          md:invisible
          flex 
          flex-col           
          fixed
          z-50
          top-28
          items-end
          bg-white
           py-2
           px-2
          rounded-l-md
           gap-2
           right-1
           shadow-md
           shadow-slate-400
          "
          v-if="!isLoading"
          >
      <a title="Bagikan Ke Facebook" class="bg-[#3B5998] hover:bg-[#294277] rounded-full p-2 w-7" :href="`https://www.facebook.com/sharer/sharer.php?u=${siteUrl+'articles/'+slug}`" target="_blank">
        <img src="~/assets/images/facebook.svg" alt="">
      </a>

      <a title="Bagikan Ke Twitter" class="bg-[#03A9F4] hover:bg-[#62b8e0] rounded-full p-2 w-7" :href="`https://twitter.com/intent/tweet?url=${siteUrl +'articles/'+ slug}`" target="_blank">
        <img src="~/assets/images/twitter.svg" alt="">
      </a>

      <a title="Bagikan Ke Whatsapp" class="bg-[#4CAF50] hover:bg-[#419c45] rounded-full p-2 w-7" :href="`https://api.whatsapp.com/send?text=${siteUrl +'articles/'+ slug}`" target="_blank">
        <img src="~/assets/images/whatsapp.svg" alt="">
      </a>

      <button title="Salin Link" class="bg-slate-600 hover:bg-slate-700 rounded-full p-2 w-7" target="_blank" @click="copy(url=`${siteUrl+'articles/'+slug}`)">
        <img src="~/assets/images/link.svg" alt="">
      </button>
    </div>

    </div>
  </div>

  <div class=" col-span-2">
    <h2 class="text-slate-700 font-semibold p-4">Artikel Terbaru Lainnya</h2>

  
<ul class="max-w-sm divide-y">

    <div v-if="isLoadingList">
      <li class="p-4 sm:pb-4" v-for="item in skeletons" :key="item.id">
      <div class="flex items-center space-x-4">
         <div class="flex-shrink-0">
            <div class="w-28 h-16 rounded-sm animate-pulse bg-gray-300" ></div>
         </div>
         <div class="flex-1 min-w-0">
            <div class="text-sm font-normal animate-pulse bg-gray-300 text-justify w-36 h-4 rounded-md">
            </div>
            <br>
            <div
            class="
              my-2
              animate-pulse 
              bg-gray-300
   
              rounded
              w-10
              h-4
            "
            ></div>
         </div>
      </div>
   </li>
    </div>

    <div v-else>
      <li class="p-4 sm:pb-4" v-for="item in articles.slice(0,4)" :key="item.id">
      <div class="flex items-center space-x-4">
         <div class="flex-shrink-0">
            <img class="w-28 h-16 rounded-sm" :src="item.image_url" alt="Neil image">
         </div>
         <div class="flex-1 min-w-0">
            <NuxtLink :to="`${item.slug}`" class="text-sm font-normal text-slate-800 hover:text-slate-600 text-justify max-width-sm">
               {{ item.title }}
            </NuxtLink>
            <br>
            <span
            class="
              my-2
              bg-blue-300
              text-blue-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
              
            "
            >{{  item.category}}</span>
         </div>
      </div>
   </li>
    </div>



</ul>


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
      isLoadingList:true,
      slug: this.$route.params.slug,
      siteUrl: process.env.SITE_URL,
      articles:[],
      skeletons:[
        {
          id:1
        },
        {
          id:2
        },
        {
          id:3
        },
        {
          id:4
        },
      ]
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
    this.getArticle();
    this.getArticles();
},
  methods:{
    // async pushVisitor(){
    //   const payload = await this.$axios.$post('blog-visitors',{
    //     title: this.title,
    //     slug: this. slug
    //   })
    // },
    async copy(url){
      try {
        await navigator.clipboard.writeText(url);
        this.$swal({
          position: 'center',
          icon: 'success',
          title: 'Link berhasil disalin',
          showConfirmButton: false,
          customClass: 'swal-wide',
          timer: 1500
        })
      } catch($e) {
        this.$swal({
          position: 'center',
          icon: 'success',
          title: 'Link tidak dapat disalin',
          showConfirmButton: false,
          customClass: 'swal-wide',
          timer: 1500
        })
      }
    },
    async getArticle() {
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
    async getArticles(){
      this.isLoadingList = true
      try{
        let response = await this.$axios.$get('published/articles')
        this.articles = response.data
        this.isLoadingList = false
      }catch(e){
        alert('Maaf gagal memuat data')
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
.swal-wide{
    width:250px !important;
    font-size: 10px;
}
</style>