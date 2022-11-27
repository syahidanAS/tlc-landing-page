<template>
  <section
    id="testimonials"
    class="px-20 pt-8 bg-white pb-0 md:pb-20 md:px-32 md:pt-20"
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
    <swiper
      v-show="swiperReady"
      ref="bannerSwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
      :delete-instance-on-destroy="true"
      :cleanup-styles-on-destroy="false"
      class="text-center items-center mx-auto md:mx-0"
      @ready="swiperReady = true"
      @mouseover.native="pauseSwiper"
      @mouseleave.native="resumeSwiper"
    >
      <swiper-slide>
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
            src="~/assets/images/boy.jpg"
            alt="testimonial"
          />
          <h2 class="text-2xl text-slate-800 font-bold">Joni De</h2>
          <p class="text-sm text-slate-600 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            facere.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div
          class="
            flex flex-col
            max-w-sm
            gap-2
            rounded-md
            items-center
            shadow-sm shadow-slate-400
            my-14
            bg-white
            py-8
            px-4
          "
        >
          <img
            class="rounded-full w-24 h-24"
            src="~/assets/images/program-purple.png"
            alt="testimonial"
          />
          <h2 class="text-2xl text-slate-800 font-bold">Joni De</h2>
          <p class="text-sm text-slate-600 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            facere.
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
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
            px-4
            bg-white
          "
        >
          <img
            class="rounded-full w-24 h-24"
            src="~/assets/images/boy.jpg"
            alt="testimonial"
          />
          <h2 class="text-2xl text-slate-800 font-bold">Joni De</h2>
          <p class="text-sm text-slate-600 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            facere.
          </p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
          1280: {
            slidesPerView: 3,
          },
          720: {
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
};
</script>

<style>
</style>