<template>
    <div class="flex flex-col w-screen h-screen bg-gray-100 overflow-y-scroll">
        <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">Kelola Artikel</h1>
        <h2 class="mx-auto mb-4 text-sm font-normal text-slate-600">Agar tampilan website terlihat lebih nyaman, artikel wajib diisi minimal 3 item</h2>
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
        @input="search()"
      />
      <button class="px-6 rounded-md bg-sky-500 text-white hover:bg-sky-600 mx-2" @click="search()">
        Cari
      </button>
      <button class="px-6 rounded-md bg-red-500 text-white hover:bg-red-600" @click="getArticles()">
        Batal
      </button>
    </div>
    <NuxtLink class="flex flex-row p-2 bg-sky-500 hover:bg-sky-600 rounded-md text-white w-36 text-center justify-center mt-4" to="/admin/categories">Kelola Kategori</NuxtLink>
        <div
      class="flex flex-col container mx-auto px-4 md:px-0 py-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
   
      <!-- Card Items -->
      <article-card-skeleton v-if="isLoading"></article-card-skeleton>
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
          <a
            class="
              my-2
              font-semibold
              text-slate-700 text-base
              hover:underline hover:cursor-pointer
            "
            :href="`${siteUrl}articles/${article.slug}`"
            target="_blank"
            >{{ article.title }}</a
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
            "
            >{{ article.category }}</span>
            <br>
            <span
            class="
              my-2
              bg-red-100
              text-red-800
              text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
            "
            v-if="(article.published_at == null)"
            >Belum Dipublish</span>
            <span
            class="
              my-2
              bg-green-100
              text-green-800
              text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
            "
            v-else
            > {{ formatDate(article.published_at) }}</span>

            <div class="flex flex-row py-2 gap-2">
                <button class="py-1 px-2 border-2 border-red-500 rounded-md text-red-500 text-sm hover:bg-red-500 hover:text-white" @click="destroy(article.id)">Hapus</button>
                <NuxtLink class="py-1 px-2 border-2 border-yellow-500 rounded-md text-yellow-500 text-sm hover:bg-yellow-500 hover:text-white" :to="`article/${article.slug}`">Edit</NuxtLink>

                <button class="py-1 px-2 border-2 border-sky-500 rounded-md text-sky-500 text-sm hover:bg-sky-500 hover:text-white" v-if="!article.published_at" @click="publish(article.slug)">Publish</button>
                <button class="py-1 px-2 border-2 border-gray-500 rounded-md text-gray-500 text-sm hover:bg-gray-500 hover:text-white" v-else @click="unpublish(article.slug)">Unpublish</button>
            </div>
        </div>
      </div>
      <!-- End of card items -->
    </div>
    <NuxtLink
        id="fab"
        title="Buat Artikel"
        class="
          fixed
          z-50
          bottom-10
          right-8
          w-12
          h-12
          p-2
          md:w-12 md:h-12
          rounded-full
          drop-shadow-lg
          flex
          justify-center
          items-center
          bg-sky-600
          hover:bg-sky-700
        "
        to="/admin/article"
      >
        <img src="~/assets/images/plus.svg" alt="" />
      </NuxtLink>
      
    </div>
</template>

<script>
export default {
    layout: 'adminDefault',
    middleware: 'auth',
    data(){
        return{
            isLoading: false,
            articles: [],
            notFound: false,
            siteUrl: process.env.SITE_URL,
            inputSearch: null
        }
    },
    methods:{
        formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('id', options)
    },
        async getArticles() {
            this.inputSearch = null;
      this.isLoading = true
      try{
        this.notFound = false 
        const payload = await this.$axios.$get('articles')
        this.articles = payload.data
        this.isLoading = false
      }catch(error){
        this.isLoading = true
        this.notFound = true
      }
    },
    publish(slug){
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;

        this.$swal({
            title: 'Publish Artikel?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Publish',
            }).then((result) =>{
                
                if(result.value){
                    try{
                        this.$axios.$post(`articles/publish`,{
                            slug: slug,
                            published_at: dateTime
                        })
                        this.$swal(
                        'Berhasil!',
                        'Artikel Berhasil Publish',
                        'success'
                        )
                        this.getArticles();
                    }catch(err){
                        this.$swal({
                        icon: 'error',
                        title: 'Gagal Publish Artikel!',
                    })
                    }
                }
        })
    },
    unpublish(slug){
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;

        this.$swal({
            title: 'Unpublish Artikel?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Unpublish',
            }).then((result) =>{
                
                if(result.value){
                    try{
                        this.$axios.$post(`articles/publish`,{
                            slug: slug,
                            published_at: null
                        })
                        this.$swal(
                        'Berhasil!',
                        'Artikel Berhasil Unpublish',
                        'success'
                        )
                        this.getArticles();
                    }catch(err){
                        this.$swal({
                        icon: 'error',
                        title: 'Gagal Unpublish Artikel!',
                    })
                    }
                }
        })
    },
     destroy(id){
        this.$swal({
        title: 'Hapus Artikel',
        text: "Artikel yang sudah dihapus tidak dapat dikembalikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya'
        }).then((result) => {
        if (result.value) {

            try{
                this.$axios.$delete(`articles/${id}`)
                this.$swal(
                'Berhasil!',
                'Berhasil Menghapus Data',
                'success'
                )
                this.getArticles();
            }catch(err){
                this.$swal({
                    icon: 'error',
                    title: 'Gagal Menghapus Data!',
                    })
            }
        }
        })
    },
    async search(){
        this.isLoading = true
      try{
        const payload = await this.$axios.$post('articles/search',{
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
    },
    },
    mounted(){
        this.getArticles();
    }
}
</script>

<style>

</style>