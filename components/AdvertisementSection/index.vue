<template>
  <section class="pb-16 px-5 bg-white  md:pb-20 md:px-32 2xl:px-52 md:pt-14">
    <swiper
   
      v-show="swiperReady"
      ref="bannerSwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
      class="banner__swiper text-center items-center mx-auto md:mx-0"
      @ready="swiperReady = true"
      @mouseover.native="pauseSwiper"
      @mouseleave.native="resumeSwiper"
    >
      <swiper-slide  v-for="item in advers" :key="item.index">
        <a :href="item.desc">
          <img class="rounded-lg" :src="item.image_url" alt=""/>
        </a>
      </swiper-slide>


      <div class="swiper-pagination" slot="pagination"></div>
      
    </swiper>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      isLoading: false,
      advers:[],
      swiperReady: false,
      swiperOptions: Object.freeze({
        slidesPerView: 1,
        speed: 750,
        spaceBetween: 32,
        mousewheel: true,
        passiveListeners: true,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        breakpoints: {
          1536: {
            slidesPerView: 1.2,
          },
          1280:{
            slidesPerView: 1.2
          },
          1024:{
            slidesPerView: 1.2
          },
          768:{
            slidesPerView: 1
          },
          750:{
            slidesPerView: 1
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
    async getBanners(){
      this.isLoading = true
      try{
        const payload = await this.$axios.$get('banners')
        this.advers = payload.data
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
    this.getBanners()
  }
};
</script>
  