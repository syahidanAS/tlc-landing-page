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
            <NuxtLink
              class="
                transform
                block
                mt-2
                transition
                duration:500
                hover:scale-125 hover:text-blue-300
              "
              to="/"
              >Home</NuxtLink
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
              to="/products"
              >Program</NuxtLink
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
              to="/pricing"
              >Gallery</NuxtLink
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
              to="/about"
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
                hover:scale-125 hover:text-blue-300
              "
              to="/about"
              >About</NuxtLink
            >
          </li>
        </ul>
        <div class="flex md:hidden" v-on:click="isHidden = !isHidden">
          <a href="#">
            <img src="~/assets/menu.png" class="w-6" alt="menu" />
          </a>
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
              <NuxtLink class="hover:text-orange-500" to="/">Home</NuxtLink>
            </li>
            <li class="my-6">
              <NuxtLink class="hover:text-orange-500" to="/products"
                >Products</NuxtLink
              >
            </li>
            <li class="my-6">
              <NuxtLink class="hover:text-orange-500" to="/pricing"
                >Pricing</NuxtLink
              >
            </li>
            <li class="my-6">
              <NuxtLink class="hover:text-orange-500" to="/about"
                >About</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Nuxt class="blur-md" v-if="!isHidden" />
    <Nuxt class="" v-else />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {},
};
</script>

<style></style>
