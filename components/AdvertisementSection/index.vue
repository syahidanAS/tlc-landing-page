<template>
  <section class="bg-white pb-0 md:pb-20">
    <carousel class="mx-6 md:mb-10 md:mx-0 " :slides="slides" :interval="3000" controls indicators></carousel>

  </section>
</template>
  
  <script>
  import Carousel from '../carousel/Carousel.vue';

export default {
  name: "AdvertisementSection",

  components: { Carousel },
  data() {
    return {
      slides:[
        require(`~/assets/images/banner1.jpg`),
        require(`~/assets/images/banner2.jpg`),
        require(`~/assets/images/banner3.jpg`),
      ],
    };
  },
  methods: {},
};
</script>
  