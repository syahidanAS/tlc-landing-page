<template>
  <div class="carousel-indicators">
    <button
      class="carousel-indicator-item rounded-full"
      :class="{  active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template> 

<script>
export default {
  props: ["total", "currentIndex"],
  emits: ['switch'],
};
</script>

<style>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}
.carousel-indicator-item {
  width: 15px;
  height: 15px;
  border: none;
  background: white;
  opacity: 0.5;
  margin: 0.2em;
  cursor: pointer;
}
.active {
  opacity: 1;
}
@media only screen and (max-width: 768){
  .carousel-indicators{
    bottom: 20%;
  }
  .carousel-indicator-item{
    width: 10px;
    height: 10px;
  }
}
@media only screen and (min-width: 1024){
  .carousel-indicators{
    bottom: 50%;
  }
  .carousel-indicator-item{
    width: 10px;
    height: 10px;
  }
}



</style>