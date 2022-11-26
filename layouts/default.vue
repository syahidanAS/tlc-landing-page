<template>
  <div class="relative z-10">
    <nav class="bg-slate-800 p-2 sticky top-0 z-50">
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
        <div class="flex flex-col">
          <a class="text-white font-bold text-2xl" href="/">
            The <span class="text-blue-300">Bright</span>
          </a>
          <span class="font-thin text-sm text-white"> Learning Center </span>
        </div>
        <ul class="hidden font-semibold text-white md:flex md:gap-6">
          <li>
            <a
              class="
                transform
                block
                mt-2
                transition
                duration:500
                hover:scale-125 hover:text-blue-300
              "
              href="#about"
              >Tentang Kami</a
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
                hover:scale-125 hover:text-blue-300
              "
              href="#programs"
              >Program</a>
          </li>
          <li>
            <a
              class="
                transform
                block
                mt-2
                transition
                duration:500
                hover:scale-125 hover:text-blue-300
              "
              href="#testimonials"
              >Testimoni</a
            >
          </li>
          <li>
            <NuxtLink
              class="
                transform
                block
                mt-2
                transition
                duration:500
                hover:scale-125 hover:text-blue-300
              "
              to="#about"
              >Blog</NuxtLink
            >
          </li>
        </ul>
        <div class="flex md:hidden cursor-pointer" v-on:click="isHidden = !isHidden" v-if="isHidden" >    
            <img src="~/assets/images/menu.png" class="w-6" alt="menu" />
        </div>
        <div class="flex md:hidden cursor-pointer" v-on:click="isHidden = !isHidden" v-else >    
            <img src="~/assets/images/close.png" class="w-5" alt="menu" />
        </div>
      </div>
      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div
          v-if="!isHidden"
          :class="`
                opacity-95
                absolute
                flex-col
                px-7
                mt-2
                w-full
                space-y-2
                font-semibold
                bg-slate-800
                drop-shadow-sm
                -ml-2
                text-white
                border-t
                border-slate-600
                `"
        >
          <ul>
            <li class="mb-6 mt-5">
              <NuxtLink class="hover:text-blue-300" to="/">Home</NuxtLink>
            </li>
            <li class="my-6">
              <a class="hover:text-blue-300" href="#programs"
                >Programs</a>
            </li>
            <li class="my-6">
              <NuxtLink class="hover:text-blue-300" to="/gallery"
                >Gallery</NuxtLink
              >
            </li>
            <li class="my-6">
              <NuxtLink class="hover:text-blue-300" to="/blog"
                >Blog</NuxtLink
              >
            </li>
            <li class="my-6">
              <NuxtLink class="hover:text-blue-300" to="/about"
                >About</NuxtLink
              >
            </li>
            <li class="my-6">
              <div class="flex flex-row gap-4"  @click="isExpand = !isExpand">
                <p class="cursor-pointer hover:text-blue-300">Shortcut</p>
                <img class="cursor-pointer w-4 content-end" src="~/assets/images/down.png" alt="" v-if="!isExpand">
                <img class="cursor-pointer w-4 content-end" src="~/assets/images/up.png" alt="" v-if="isExpand">
              </div>
              <ul class="px-4 flex flex-col gap-2 mt-2 font-thin border-l-2 border-indigo-500"  v-if="isExpand">
                <li><a href="https://student.thebrightcourse.com">Student Page</a></li>
                <li><a href="https://teacher.thebrightcourse.com">Teacher Page </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Nuxt class="blur-md" @click="isHidden = !isHidden" v-if="!isHidden"  />
    <Nuxt class="" @click="isHidden = !isHidden" v-else />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isHidden: true,
      isExpand: false,
    };
  },
  methods: {},
};
</script>

<style></style>
