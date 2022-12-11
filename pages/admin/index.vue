<template>
  <div class="flex flex-col w-screen h-screen bg-gray-100 ">
    <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">Dashboard</h1>
    <div class="bg-slate-500 mx-auto p-5 rounded-md justify-center shadow-md shadow-slate-200">
      <div class="flex flex-row gap-4 ">
      <div class="flex flex-col p-6 bg-white rounded-md shadow-sm shadow-slate-300">
        <div class="flex flex-row-reverse gap-4">
          <img class="w-6" src="~/assets/images/visitors.svg" alt="">
          <h2 class="text-lg font-semibold text-slate-600">Jumlah Visitor Website</h2>
        </div>
        <div class="w-full h-10 animate-pulse bg-gray-300 rounded-md" v-if="isLoading"></div>
          <h1 class="text-4xl font-bold text-slate-700" v-else>{{ allWebVisitor }}</h1>
          <p class="text-sm font-normal text-slate-700">Total Seluruh Pengunjung Website</p>
      </div>

      <div class="flex flex-col p-6 bg-white rounded-md shadow-sm shadow-slate-300">
        <div class="flex flex-row-reverse gap-4">
          <img class="w-6" src="~/assets/images/visitors.svg" alt="">
          <h2 class="text-lg font-semibold text-slate-600">Jumlah Visitor Blog</h2>
        </div>
        <div class="w-full h-10 animate-pulse bg-gray-300 rounded-md" v-if="isLoading"></div>
          <h1 class="text-4xl font-bold text-slate-700" v-else>{{ allBlogVisitor }}</h1>
          <p class="text-sm font-normal text-slate-700">Total Seluruh Pengunjung Blog</p>
      </div>

      <div class="flex flex-col p-6 bg-white rounded-md shadow-sm shadow-slate-300">
        <div class="flex flex-row-reverse gap-4">
          <img class="w-6" src="~/assets/images/article.svg" alt="">
          <h2 class="text-lg font-semibold text-slate-600">Artikel Dipublish</h2>
        </div>
        <div class="w-full h-10 animate-pulse bg-gray-300 rounded-md" v-if="isLoading"></div>
          <h1 class="text-4xl font-bold text-slate-700" v-else>{{ allPublishedArticle }}</h1>
          <p class="text-sm font-normal text-slate-700">Total Seluruh Artikel Publish</p>
      </div>
    </div>

    <div class="flex flex-row gap-4 mx-auto py-4">
      <div class="flex flex-col p-6 bg-white rounded-md shadow-sm shadow-slate-300">
        <div class="flex flex-row-reverse gap-4">
          <img class="w-6" src="~/assets/images/visitors.svg" alt="">
          <h2 class="text-lg font-semibold text-slate-600">Jumlah Visitor Web Bulan ini</h2>
        </div>
          <div class="w-full h-10 animate-pulse bg-gray-300 rounded-md" v-if="isLoading"></div>
          <h1 class="text-4xl font-bold text-slate-700" v-else>{{ allWebVisitorPerMonth }}</h1>
          <p class="text-sm font-normal text-slate-700">Total Seluruh Pengunjung Web Bulan Ini</p>
      </div>

      <div class="flex flex-col p-6 bg-white rounded-md shadow-sm shadow-slate-300">
        <div class="flex flex-row-reverse gap-4">
          <img class="w-6" src="~/assets/images/testimonial.svg" alt="">
          <h2 class="text-lg font-semibold text-slate-600">Jumlah Visitor Blog Bulan Ini </h2>
        </div>
        <div class="w-full h-10 animate-pulse bg-gray-300 rounded-md" v-if="isLoading"></div>
          <h1 class="text-4xl font-bold text-slate-700" v-else>{{ allBlogVisitorPerMonth }}</h1>
          <p class="text-sm font-normal text-slate-700">Total Seluruh Pengunjung Blog Bulan Ini</p>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  layout:'adminDefault',
  data(){
    return{
      allWebVisitor: null,
      allWebVisitorPerMonth: null,
      allBlogVisitor: null,
      allBlogVisitorPerMonth: null,
      allPublishedArticle: null,
      isLoading: false
    }
  },
  computed:{
    ...mapGetters([ 'isAuthenticated', 'loggedInUser' ])
  },
  methods:{
    async logout(){
      await this.$auth.logout();
    },
    async getWebVisitor(){
      this.isLoading = true;
      this.$axios.setHeader('Authorization', this.$auth.strategy.token.get())
      let response = await this.$axios.$get('web-visitors')
      this.allWebVisitor = response.all_data.total
      this.allWebVisitorPerMonth = response.this_month.total
      this.isLoading = false;
    },
    async getBlogVisitor(){
      this.isLoading = true;
      this.$axios.setHeader('Authorization', this.$auth.strategy.token.get())
      let response = await this.$axios.$get('blog-visitors')
      this.allBlogVisitor = response.all_data.total
      this.allBlogVisitorPerMonth = response.this_month.total
      this.isLoading = false;
    },
    async getPublishedArticle(){
      this.isLoading = true;
      let response = await this.$axios.$get('published/articles')
      this.allPublishedArticle = response.total
      this.isLoading = false;
    }
  },
  mounted(){
    this.getWebVisitor();
    this.getBlogVisitor();
    this.getPublishedArticle();
  }
}
</script>


<style>

</style>