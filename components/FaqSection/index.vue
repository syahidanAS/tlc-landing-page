<template>
  <section class="bg-white py-24 md:py-8" id="faq">
    <div
      class="
        container
        flex flex-col-reverse
        px-4
        md:flex-row
        items-center
        md:pt-32 md:px-20
        mx-auto
        space-y-0
        md:space-y-0 md:mb-10
      "
    >
      <!-- Left Item -->
      <div
        class="
          flex flex-col
          mt-6
          w-full
          space-y-8
          md:mt-0 md:w-1/2
          shadow-sm shadow-slate-700
          py-2
          md:pt-8
        "
      >
        <div
          class="flex flex-col cursor-pointer"
          v-on:click="isHidden1 = !isHidden1"
        >
          <div class="flex flex-row justify-between px-3">
            <h1 class="text-md font-semibold text-slate-800">
              Berapa biaya registrasi di The Bright?
            </h1>
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-up-slate-24.png"
              alt=""
              v-if="!isHidden1"
            />
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-down-slate-24.png"
              alt=""
              v-else
            />
          </div>
          <div class="px-3" v-if="!isHidden1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              porro obcaecati consequatur explicabo tempore sed hic! Odio ad
              distinctio perspiciatis?
            </p>
          </div>
        </div>
        <div
          class="flex flex-col cursor-pointer"
          v-on:click="isHidden2 = !isHidden2"
        >
          <div class="flex flex-row justify-between px-3">
            <h1 class="text-md font-semibold text-slate-800">
              Apakah biaya registrasi berlaku seumur hidup?
            </h1>
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-up-slate-24.png"
              alt=""
              v-if="!isHidden2"
            />
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-down-slate-24.png"
              alt=""
              v-else
            />
          </div>
          <div class="px-3" v-if="!isHidden2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              porro obcaecati consequatur explicabo tempore sed hic! Odio ad
              distinctio perspiciatis?
            </p>
          </div>
        </div>
        <div
          class="flex flex-col cursor-pointer"
          v-on:click="isHidden3 = !isHidden3"
        >
          <div class="flex flex-row justify-between px-3">
            <h1 class="text-md font-semibold text-slate-800">
              Lorem ipsum dolor sit amet?
            </h1>
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-up-slate-24.png"
              alt=""
              v-if="!isHidden3"
            />
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-down-slate-24.png"
              alt=""
              v-else
            />
          </div>
          <div class="px-3" v-if="!isHidden3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              porro obcaecati consequatur explicabo tempore sed hic! Odio ad
              distinctio perspiciatis?
            </p>
          </div>
        </div>
        <div
          class="flex flex-col cursor-pointer"
          v-on:click="isHidden4 = !isHidden4"
        >
          <div class="flex flex-row justify-between px-3">
            <h1 class="text-md font-semibold text-slate-800">
              Lorem ipsum dolor sit amet?
            </h1>
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-up-slate-24.png"
              alt=""
              v-if="!isHidden4"
            />
            <img
              class="w-4 h-4 opacity-9"
              src="~/assets/images/arrow-down-slate-24.png"
              alt=""
              v-else
            />
          </div>
          <div class="px-3" v-if="!isHidden4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              porro obcaecati consequatur explicabo tempore sed hic! Odio ad
              distinctio perspiciatis?
            </p>
          </div>
        </div>
        <div class="flex flex-col cursor-pointer">
          <div class="flex flex-row justify-end px-3">
            <NuxtLink
              to="/faqs"
              class="text-md font-semibold text-blue-500 hover:text-blue-700"
            >
              Selengkapnya
            </NuxtLink>
          </div>
        </div>
      </div>
      
     
      <!-- Image -->
      <div class="md:w-1/2">
        <h1
          class="text-center text-2xl md:text-4xl font-semibold text-slate-700"
        >
          Tanya Jawab
        </h1>
        <img class="mx-auto" src="~/assets/images/pointing-girl.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isHidden1: true,
      isHidden2: true,
      isHidden3: true,
      isHidden4: true,
    };
  },
};
</script>

<style>
</style>