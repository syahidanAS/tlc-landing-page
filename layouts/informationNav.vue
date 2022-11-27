<template>
    <div>
      <div class="relative z-10">
      <nav class="p-2  sticky top-0 z-50 " :class="navColor">
        <div
          class="
            flex
            container
            justify-between
            items-center
            px-5
            md:px-20 md:mx-auto
          "
        >
          <div class="flex">
            <a class="flex flex-row text-sky-400 font-bold text-2xl" href="/">
              <img class="w-10" src="~/assets/images/logo-blue.png" alt="" />
              <h2 class="px-2 text-center pt-1">The Bright</h2>
            </a>
          </div>
          <ul class="hidden font-bold text-md text-white md:flex md:gap-6">
            <li>
              <NuxtLink
                class="
                  transform
                  block
                  mt-2
                  transition
                  duration:500
                  hover:scale-125
                  hover:bg-slate-400
                  hover:px-1
                  hover:rounded-md
                "
                :class="textColor"
                to="/"
                >Beranda</NuxtLink
              >
            </li>
            <li>
              <a
                class="
                  transform
                  block
                  mt-2
                  transition
                  duration:500
                  hover:scale-125
                  hover:bg-slate-400
                  hover:px-1
                  hover:rounded-md
                "
                :class="textColor"
                href="#faq"
                >Informasi</a>
            </li>

            <li>
              <a
                class="
                  transform
                  block
                  mt-2
                  transition
                  duration:500
                  hover:scale-125
                  hover:bg-slate-400
                  hover:px-1
                  hover:rounded-md
                "
                :class="textColor"
                href="#faq"
                >
                <img src="~/assets/images/instagram-white-16.png" alt="">
            </a>
            </li>

            <li>
              <a
                class="
                  transform
                  block
                  mt-2
                  transition
                  duration:500
                  hover:scale-125
                  hover:bg-slate-400
                  hover:px-1
                  hover:rounded-md
                "
                :class="textColor"
                href="#faq"
                >
                <img src="~/assets/images/whatsapp-white-16.png" alt="">
            </a>
            </li>

            <li>
              <a
                class="
                  transform
                  block
                  mt-2
                  transition
                  duration:500
                  hover:scale-125
                  hover:bg-slate-400
                  hover:px-1
                  hover:rounded-md
                "
                :class="textColor"
                href="#faq"
                >
                <img src="~/assets/images/youtube-white-16.png" alt="">
            </a>
            </li>
          </ul>
          <div
            class="flex md:hidden cursor-pointer"
            v-on:click="isHidden = !isHidden"
            v-if="isHidden"
          >
            <img :src="require('~/assets/images/'+menuTheme)" class="w-6" alt="menu" />
          </div>
          <div
            class="flex md:hidden cursor-pointer"
            v-on:click="isHidden = !isHidden"
            v-else
          >
            <img :src="require('~/assets/images/'+closeTheme)" class="w-5" alt="menu" />
          </div>
        </div>
        <!-- Mobile Menu -->
        <div class="md:hidden">
          <div
            v-if="!isHidden"
            class="
              opacity-95
              absolute
              flex-col
              px-7
              mt-2
              w-full
              space-y-2
              font-semibold
              drop-shadow-sm
              -ml-2
              text-white
              border-t border-slate-200
            "
            :class="navColor"
          >
            <ul>
              <li class="mb-6 mt-5">
                <NuxtLink :class="textColor" to="/" v-on:click="isHidden = !isHidden">Beranda</NuxtLink>
              </li>
              <li class="my-6">
                <div class="flex flex-row gap-4" @click="isExpand = !isExpand">
                  <p class="cursor-pointer" :class="textColor">Informasi</p>
                  <img
                    class="cursor-pointer w-4 h-4 content-end my-auto"
                    :src="require('~/assets/images/' + upDirection) "
                    alt=""
                    v-if="!isExpand"
                  />
                  <img
                    class="cursor-pointer w-4 h-4 content-end my-auto"
                    :src="require('~/assets/images/' + downDirection )"
                    alt=""
                    v-if="isExpand"
                  />
                </div>
                <ul
                  class="
                    px-4
                    flex flex-col
                    gap-2
                    mt-2
                    font-thin
                    border-l-2 border-indigo-500
                  "
                  v-if="isExpand"
                >
                  <li>
                    <a
                      :class="textColor"
                      href="/articles"
                      >Artikel</a>
                  </li>
                  <li>
                    <a
                      :class="textColor"
                      href="/faqs"
                      >FAQ</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Nuxt class="blur-md" @click="isHidden = !isHidden" v-if="!isHidden" />
      <Nuxt class="" @click="isHidden = !isHidden" v-else />
      <a
        id="fab"
        title="Contact Sale"
        class="
          fixed
          z-90
          bottom-10
          right-8
          bg-pink-500
          w-10
          h-10
          md:w-12
          md:h-12
          rounded-full
          drop-shadow-lg
          flex
          justify-center
          items-center
          hover:bg-pink-700
          hover:drop-shadow-2xl 
          animate-bounce
          duration-300
        "
        v-show="show"
        href="#"
      >
        <img src="~/assets/images/arrow-up-white-24.png" alt="">
    </a>
  
    </div>
    </div>
    
  </template>
  
  <script>
  export default {
    name: "DefaultLayout",
    data() {
      return {
        isHidden: true,
        isExpand: false,
        navColor: "bg-slate-700",
        navOpacity: 'opacity-1',
        textColor: "text-white hover:text-slate-800",
        menuTheme: "menu-white-64.png",
        closeTheme: "close-white-64.png",
        upDirection: "arrow-up-white-24.png",
        downDirection: "arrow-down-white-24.png",
        show: false,
      };
    },
    
  };
  </script>
  
  <style></style>
  