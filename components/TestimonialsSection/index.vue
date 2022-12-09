<template>
  <section
    id="testimonials"
    class=" px-5 pt-8 bg-white pb-0  md:px-32 2xl:px-52 md:pt-20"
  >
    <h2 class="text-slate-700 text-2xl font-bold text-center md:text-slate-600">
      Testimoni
    </h2>
    <!-- Heading -->
    <h1
      class="
        mt-2
        py-0
        text-center
        md:py-4
        text-2xl
        md:text-4xl
        font-semibold
        text-blue-600
        md:text-blue-600
      "
    >
      <span class="text-slate-700 md:text-slate-500 text-center">Apa Kata</span>
      Mereka?
    </h1>
    <p class="text-center text-slate-600 text-lg font-semibold">Sejak tahun 2016 The Bright sudah memiliki 700+ murid</p>
   <div class="mx-auto 2xl:mx-52">
    <swiper
      v-show="swiperReady"
      ref="bannerSwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
      class="text-center items-center mx-auto md:mx-0 z-0"
      @ready="swiperReady = true"
      @mouseover.native="pauseSwiper"
      @mouseleave.native="resumeSwiper"
      
    >
      <swiper-slide v-if="isLoading">
        <div
          class="
            flex flex-col
            max-w-sm
            gap-2
            rounded-md
            items-center
            shadow-sm shadow-slate-400
            my-14
            py-8
            bg-white
            px-4
          "
          
        >
        <div class="w-24 h-24 animate-pulse bg-gray-300 rounded-full">

        </div>
          <div class="w-full h-5 bg-gray-300 animate-pulse rounded-md"></div>
          <div class="w-full h-5 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </swiper-slide>

      <swiper-slide class="z-0" v-for="item in testimonials" :key="item.index" v-else>
        <div
          class="
            flex flex-col
            max-w-sm
            gap-2
            rounded-md
            items-center
            shadow-sm shadow-slate-400
            my-14
            py-8
            bg-white
            px-4
            
          "
        >
          <img
            class="rounded-full w-24 h-24"
            :src="item.image_url"
            alt="testimonial"
          />
          <h2 class="text-2xl text-slate-800 font-bold">{{ item.name }}</h2>
          <p class="text-sm text-slate-600 font-semibold">
            {{ item.testimonial }}
          </p>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
   </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      testimonials: [],
      swiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        speed: 750,
        spaceBetween: 10,
        mousewheel: true,
        passiveListeners: true,
        loop: true,
        autoplay: {
          delay: 1800,
          disableOnInteraction: false,
        },
        breakpoints: {
          1536: {
            slidesPerView: 3,
          },
          1280:{
            slidesPerView: 3,
          },
          1024:{
            slidesPerView: 3
          },
          768:{
            slidesPerView: 2
          },
          750:{
            slidesPerView: 2
          },
          640: {
            slidesPerView: 1,
          },
        },
      }),
    };
  },
  computed: {
    swiper() {
      return this.$refs.bannerSwiper.$swiper;
    },
  },
  methods: {
    async getTestimonials(){
      this.isLoading = true
      try{
        const payload = await this.$axios.$get('testimonials')
        this.testimonials = payload.data
        this.isLoading = false
      }catch(error){
        this.isLoading = true
      }
    },


    pauseSwiper() {
      if (this.swiper) {
        this.swiper.autoplay.stop();
      }
    },
    resumeSwiper() {
      if (this.swiper) {
        this.swiper.autoplay.start();
      }
    },
  },
  mounted(){
    this.getTestimonials()
  }
};
</script>

<style>
</style>