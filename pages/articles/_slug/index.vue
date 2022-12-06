<template>
  <div class="flex flex-col bg-white container mx-auto md:px-24 py-14">
    <div id="heading" class="flex flex-col px-5 md:px-24">
      <h1
        class="text-center text-2xl font-bold text-slate-700 mx-auto lg:px-32"
      >
        {{ title }}
      </h1>
      <h3 class="mb-4 text-xs font-normal text-slate-600 text-center">
        Ditulis oleh : {{ writer }}
      </h3>
      <img
        class="overflow-hidden rounded-lg"
        :src="image_url"
        alt="article-image"
      />
    </div>
    <div class="flex flex-col px-5 py-4 md:px-24 mt-4">
      <h1 class="text-lg font-bold text-slate-700">{{ slug }}</h1>
      <h2 class="text-start text-sm font-normal text-slate-600">
        Selasa, 29 November 2022 <span>09.33</span>
      </h2>
    </div>
    <!-- Body Section -->
    <div class="container font-normal px-5 md:px-24 leading-6 text-slate-700">
      <p class="text-justify">{{ body }}</p>
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
    async getArticles() {
      this.isLoading = true
      try{
        const payload = await this.$axios.$get(`articles/${this.$route.params.slug}`)
        this.content = payload.data[0].title
        this.title = payload.data[0].title
        this.body = payload.data[0].body
        this.writer = payload.data[0].writer
        this.image_url = payload.data[0].image_url
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