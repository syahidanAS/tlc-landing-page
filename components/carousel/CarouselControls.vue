<template>
  <div>
    <button class="carousel-control left ml-4 px-auto" @click="$emit('prev')">
      <img
        class="mx-auto w-5"
        src="~/assets/images/arrow-left-slate-24.png"
        alt=""
      />
    </button>
    <button class="carousel-control right mr-4 px-auto" @click="$emit('next')">
      <img
        class="mx-auto w-5"
        src="~/assets/images/arrow-right-slate-24.png"
        alt=""
      />
    </button>
  </div>
</template>

<script>
export default {
  $emits: ["prev", "next"],
};
</script>

<style scoped>
.carousel-control {
  background-color: #fff;
  border: none;
  display: inline-block;
  position: absolute;
  height: 40px;
  width: 40px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
  border-radius: 100%;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
@media only screen and (max-width: 768px) {
  .carousel-control {
    top: calc(50% - 40px);
    opacity: 0.5;
  }
}
</style>

