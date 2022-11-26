<template>
  <div class="relative z-10">
    <nav class="p-2 sticky top-0 z-50" :class="navColor">
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
        <ul class="hidden font-semibold text-white md:flex md:gap-6">
          <li>
            <a
              class="
                transform
                block
                mt-2
                transition
                duration:500
                hover:scale-125
              "
              :class="textColor"
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
                hover:scale-125
              "
              :class="textColor"
              href="#programs"
              >Program</a
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
              "
              :class="textColor"
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
                hover:scale-125
              "
              :class="textColor"
              to="#about"
              >Blog</NuxtLink
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
                hover:scale-125
              "
              :class="textColor"
              to="#about"
              >Pintasan</NuxtLink
            >
          </li>
        </ul>
        <div
          class="flex md:hidden cursor-pointer"
          v-on:click="isHidden = !isHidden"
          v-if="isHidden"
        >
          <img src="~/assets/images/menu.png" class="w-6" alt="menu" />
        </div>
        <div
          class="flex md:hidden cursor-pointer"
          v-on:click="isHidden = !isHidden"
          v-else
        >
          <img src="~/assets/images/close.png" class="w-5" alt="menu" />
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
              <a :class="textColor" href="#about">Tentang Kami</a>
            </li>
            <li class="my-6">
              <a :class="textColor" href="#programs">Program</a>
            </li>
            <li class="my-6">
              <a :class="textColor" href="#testimonials">Testimoni</a>
            </li>
            <li class="my-6">
              <NuxtLink :class="textColor" to="/blogs">Blog</NuxtLink>
            </li>
            <li class="my-6">
              <div class="flex flex-row gap-4" @click="isExpand = !isExpand">
                <p class="cursor-pointer" :class="textColor">Pintasan</p>
                <img
                  class="cursor-pointer w-4 h-4 content-end my-auto"
                  src="~/assets/images/down.png"
                  alt=""
                  v-if="!isExpand"
                />
                <img
                  class="cursor-pointer w-4 h-4 content-end my-auto"
                  src="~/assets/images/up.png"
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
                    href="https://student.thebrightcourse.com"
                    >Student Page</a
                  >
                </li>
                <li>
                  <a
                    :class="textColor"
                    href="https://teacher.thebrightcourse.com"
                    >Teacher Page
                  </a>
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
      onclick="buttonHandler()"
      title="Contact Sale"
      class="
        fixed
        z-90
        bottom-10
        right-8
        bg-sky-500
        w-10
        h-10
        md:w-12
        md:h-12
        rounded-full
        drop-shadow-lg
        flex
        justify-center
        items-center
        
        hover:bg-blue-700 hover:drop-shadow-2xl 
        animate-bounce
        duration-300
      "
      href="#"
    >
      <img src="~/assets/images/arrow-up-white-24.png" alt="">
  </a>

  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isHidden: true,
      isExpand: false,
      navColor: "bg-white",
      textColor: "text-slate-700 hover:text-slate-800",
    };
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      console.log(window.scrollY);
      if (window.scrollY > 1000) {
        this.navColor = "bg-slate-700";
        this.textColor = "text-white hover:text-slate-200";
      } else {
        this.navColor = "bg-white";
        this.textColor = "text-slate-700 hover:text-slate-800";
      }
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style></style>
