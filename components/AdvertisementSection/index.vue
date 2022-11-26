<template>
  <carousel class="my-32" :slides="slides" :interval="3000" controls indicators></carousel>
</template>
  
  <script>
  import Carousel from '../carousel/Carousel.vue';

export default {
  name: "AdvertisementSection",

  components: { Carousel },
  data() {
    return {
      slides:[
        'https://picsum.photos/id/1040/900/400',
        'https://picsum.photos/id/1037/900/400',
      ],
    };
  },
  methods: {},
};
</script>
  