<template>
  <div>
    <!-- <div
      class="
        flex
        px-4
        py-1
        bg-yellow-400
        justify-end
        items-center
        md:px-28 md:py-2
      "
    >
      <a
        class="mx-1 hover:bg-slate-600 hover:rounded-md"
        href="https://www.instagram.com/thebright.brightfuture/"
        target="_blank"
      >
        <img src="~/assets/images/instagram-white-16.png" alt="instagram-alt" />
      </a>
      <a
        class="mx-1 hover:bg-slate-600 hover:rounded-md"
        href="#"
        target="_blank"
      >
        <img src="~/assets/images/whatsapp-white-16.png" alt="whatsapp-alt" />
      </a>
      <a
        class="mx-1 hover:bg-slate-600 hover:rounded-md"
        href="https://www.youtube.com/@thebrightkarawangbimbeldan9883"
        target="_blank"
      >
        <img src="~/assets/images/youtube-white-16.png" alt="youtube-alt" />
      </a>
    </div> -->
    <div class="relative z-10">
      <nav
        class="p-2 py-3 sticky top-0 z-50 shadow-sm shadow-slate-400"
        :class="navColor"
      >
        <div
          class="
            flex
            container
            justify-between
            items-center
            px-5
            md:px-6
            lg:px-6
            xl:px-20
            2xl:px-20
            md:mx-auto
          "
        >
          <div class="flex">
            <NuxtLink
              class="flex flex-row text-sky-400 font-bold text-2xl items-center"
              to="/"
            >
              <img class="w-10" src="~/assets/images/logo-blue.png" alt="" />
              <h2 class="px-2 text-center">The Bright</h2>
            </NuxtLink>
          </div>
          <ul
            class="
              hidden
              font-bold
              text-md text-white
              md:hidden
              lg:flex lg:gap-10
            "
          >
            <li>
              <NuxtLink
                class="block mt-2 hover:bg-slate-400 hover:rounded-md"
                :class="textColor"
                to="/#about"
                >Tentang Kami</NuxtLink
              >
            </li>

            <li>
              <NuxtLink
                class="block mt-2 hover:bg-slate-400 hover:rounded-md"
                :class="textColor"
                to="/#programs"
                >Program</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block mt-2 hover:bg-slate-400 hover:rounded-md"
                :class="textColor"
                to="/#testimonials"
                >Testimoni</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block mt-2 hover:bg-slate-400 hover:rounded-md"
                :class="textColor"
                to="career"
                >Karir</NuxtLink
              >
            </li>
            <li>
              <p
                class="
                  flex
                  mt-2
                  cursor-pointer
                  hover:bg-slate-400 hover:rounded-md
                "
                :class="textColor"
                @click="isHiddenPopup = !isHiddenPopup"
              >
                Informasi
                <img
                  class="w-2 h-2 mx-2 my-2"
                  :src="require('~/assets/images/' + downDirection)"
                  alt=""
                />
              </p>
              <div
                class="
                  flex flex-col
                  border-2
                  py-2
                  bg-white
                  z-40
                  -mb-20
                  rounded-sm
                "
                @mouseleave="isHiddenPopup = !isHiddenPopup"
                v-if="!isHiddenPopup"
              >
                <NuxtLink
                  class="text-slate-600 font-light hover:bg-slate-300"
                  to="/articles"
                  >Artikel</NuxtLink
                >
                <NuxtLink
                  class="text-slate-600 font-light hover:bg-slate-300"
                  to="/faqs"
                  >FAQ</NuxtLink
                >
              </div>
            </li>

            <li>
              <a
                class="
                  bg-pink-500
                  p-2
                  rounded-md
                  transform
                  block
                  transition
                  duration:500
                  hover:bg-pink-600
                  text-white
                "
                :href="registerLink"
                >Pendaftaran</a
              >
            </li>
          </ul>
          <div
            class="flex lg:hidden cursor-pointer"
            v-on:click="isHidden = !isHidden"
            v-if="isHidden"
          >
            <img
              :src="require('~/assets/images/' + menuTheme)"
              class="w-6"
              alt="menu"
            />
          </div>
          <div
            class="flex lg:hidden cursor-pointer"
            v-on:click="isHidden = !isHidden"
            v-else
          >
            <img
              :src="require('~/assets/images/' + closeTheme)"
              class="w-5"
              alt="menu"
            />
          </div>
        </div>
        <!-- Mobile Menu -->
        <div class="lg:hidden">
          <div
            v-if="!isHidden"
            class="
              opacity-95
              absolute
              flex-col
              px-7
              mt-2
              py-5
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
                <NuxtLink
                  :class="textColor"
                  to="/#about"
                  v-on:click="isHidden = !isHidden"
                  >Tentang Kami</NuxtLink
                >
              </li>
              <li class="my-6">
                <NuxtLink
                  :class="textColor"
                  to="/#programs"
                  v-on:click="isHidden = !isHidden"
                  >Program</NuxtLink
                >
              </li>
              <li class="my-6">
                <NuxtLink
                  :class="textColor"
                  to="/#testimonials"
                  v-on:click="isHidden = !isHidden"
                  >Testimoni</NuxtLink
                >
              </li>
              <li class="mb-6 mt-5">
                <NuxtLink
                  :class="textColor"
                  to="/career"
                  v-on:click="isHidden = !isHidden"
                  >Karir</NuxtLink
                >
              </li>
              <li class="my-6">
                <div class="flex flex-row gap-2" @click="isExpand = !isExpand">
                  <p class="cursor-pointer" :class="textColor">Informasi</p>
                  <img
                    class="cursor-pointer w-2 h-2 content-end my-auto"
                    :src="require('~/assets/images/' + upDirection)"
                    alt=""
                    v-if="!isExpand"
                  />
                  <img
                    class="cursor-pointer w-2 h-2 content-end my-auto"
                    :src="require('~/assets/images/' + downDirection)"
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
                    <a :class="textColor" href="/articles">Artikel</a>
                  </li>
                  <li>
                    <a :class="textColor" href="/faqs">FAQ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  class="p-2 bg-pink-500 mb-4 text-white hover:bg-pink-600 rounded-md"
                  href="https://thebrightcourse.com/register"
                  >Pendaftaran</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Nuxt
        class="blur-md lg:blur-none"
        @click="isHidden = !isHidden"
        v-if="!isHidden"
      />
      <Nuxt class="" @click="isHidden = !isHidden" v-else />
      <FooterSection />
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
          md:w-12 md:h-12
          rounded-full
          drop-shadow-lg
          flex
          justify-center
          items-center
          hover:bg-pink-700 hover:drop-shadow-2xl
          animate-bounce
          duration-300
        "
        v-show="show"
        href="#"
      >
        <img src="~/assets/images/arrow-up-white-24.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isHiddenPopup: true,
      isHidden: true,
      isExpand: false,
      navColor: "bg-white",
      navOpacity: "opacity-1",
      textColor: "text-slate-700 hover:text-slate-800",
      menuTheme: "menu-slate-64.png",
      closeTheme: "close-slate-64.png",
      upDirection: "arrow-up-slate-24.png",
      downDirection: "arrow-down-slate-24.png",
      show: false,
      registerLink: process.env.REGISTRATION_FORM,
    };
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      if (window.scrollY > 1000) {
        this.navColor = "bg-slate-700";
        this.textColor = "text-white hover:text-slate-200";
        this.menuTheme = "menu-white-64.png";
        this.closeTheme = "close-white-64.png";
        this.upDirection = "arrow-up-white-24.png";
        this.downDirection = "arrow-down-white-24.png";
        this.navOpacity = "opacity-1";
        this.show = true;
      } else {
        this.navColor = "bg-white";
        this.textColor = "text-slate-700 hover:text-slate-800";
        this.menuTheme = "menu-slate-64.png";
        this.closeTheme = "close-slate-64.png";
        this.upDirection = "arrow-up-slate-24.png";
        this.downDirection = "arrow-down-slate-24.png";
        this.navOpacity = "opacity-0.95";
        this.show = false;
      }
    },
    normalizePopup() {
      this.isHiddenPopup = true;
    },
  },
  mounted() {
    this.normalizePopup();
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
