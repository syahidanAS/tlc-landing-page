<template >
  <div class="flex flex-col bg-white container mx-auto px-5 md:px-24 py-10 pb-40">
    <h1 class="text-2xl font-bold text-slate-700">
      Artikel dan Berita The Bright Learning Center
    </h1>
    <h2 class="text-slate-600 font-normal mt-2 text-sm">
      Artikel dan berita seputar pengetahuan, kegiatan, dan prestasi The Bright
      Learning Center
    </h2>

    <div class="flex flex-row mt-4">
      <input
        class="
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
        "
        id="find"
        type="text"
        placeholder="Cari artikel atau berita"
        v-model="inputSearch"
        @input="submit()"
      />
      <button class="px-6 rounded-md bg-sky-500 text-white hover:bg-sky-600 mx-2" @click="submit()">
        Cari
      </button>
    </div>

    <div class="flex flex-wrap mt-4 gap-2">
      <button
        class="
          text-xs
          font-semibold
          text-sky-500
          border-2 border-sky-500
          hover:bg-sky-500
          p-1
          rounded-md
          hover:text-white
        "
        @click="getArticles()"
        >
      Semua Kategori
      </button>

      <button
        class="
          text-xs
          font-semibold
          text-sky-500
          border-2 border-sky-500
          hover:bg-sky-500
          p-1
          rounded-md
          hover:text-white
        "
        v-for="category in categories"
        :key="category.index"
        @click="findByCategory(category.id)"
      >
        {{ category.category }}
      </button>

    </div>

    <div
      class="flex flex-col container mx-auto px-4 md:px-0 py-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
   
      <!-- Card Items -->
      <article-card-skeleton v-if="isLoading"></article-card-skeleton>
      <article-card-skeleton v-if="isLoading"></article-card-skeleton>
      <article-card-skeleton v-if="isLoading"></article-card-skeleton>
      <img class="w-80 mx-auto" src="~/assets/images/not-found.svg" alt="" v-else-if="notFound">
      <div
        class="
          col-span-1
          flex 
          flex-col
          bg-white
          border-2
          overflow-hidden
          rounded-md
        "
        v-else
        v-for="article in articles"
        :key="article.index"
      >
        <img
          class="w-full h-36"
          :src="article.image_url"
          alt=""
        />
        <!-- Card Body -->
        <div class="mx-2 my-2">
          <NuxtLink
            class="
              my-2
              font-semibold
              text-slate-700 text-base
              hover:underline hover:cursor-pointer
            "
            :to="`articles/${article.slug}`"
            >{{ article.title }}</NuxtLink
          >
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
            >{{ article.category }}</span
          >
          <p class="my-2 text-xs font-normal text-slate-600">
            29 November 2022
          </p>
        </div>
      </div>
      <!-- End of card items -->
    </div>
  </div>
</template>

<script>
import ArticleCardSkeleton from '~/components/ArticleCardSkeleton';
export default {
  components: { ArticleCardSkeleton },
  data(){
    return{
      articles:[],
      categories:[],
      isLoading:true,
      inputSearch:'',
      notFound: false,
    }
  },
  mounted() {
    this.getArticles();
    this.getCategories();
    
},
  methods:{
    async getCategories(){
        const payload = await this.$axios.$get('categories')
        this.categories = payload.data
    },
    async getArticles() {
      this.isLoading = true
      try{
        this.notFound = false
        const payload = await this.$axios.$get('published/articles')
        this.articles = payload.data
        this.isLoading = false
      }catch(error){
        this.isLoading = true
        this.notFound = true
      }
    },

    async findByCategory(id){
      this.isLoading = true
      try{
        this.notFound = false
        const payload = await this.$axios.$get(`published/articles/${id}`)
        this.articles = payload.data
        this.isLoading = false
      }catch(error){
        this.isLoading = true
        this.notFound = true
      }
    },

    async submit(){
      this.isLoading = true
      try{
        const payload = await this.$axios.$post('published-articles/search',{
          title: this.inputSearch
        })
        if(payload.data.length > 0){
          this.notFound = false
          this.articles = payload.data
          this.isLoading = false
        }else{
          this.isLoading = false
          this.notFound = true

        }
        
      }catch(error){
        this.isLoading = true
        alert('Maaf gagal memuat artikel')
      }
    }
  },



};
</script>

<style>
</style>