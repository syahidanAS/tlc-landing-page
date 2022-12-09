<template>
  <div class="h-screen justify-between">
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
        class="py-3 sticky top-0 z-50 shadow-sm shadow-slate-400"
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
            2xl:px-44
            md:mx-auto
          "
        >
          <div class="flex">
            <NuxtLink
              class="flex flex-row text-sky-400 font-bold text-2xl items-center"
              to="/"
            >
              <img
                class="w-20 md:w-28 rounded-md"
                src="~/assets/images/logo-thebright.jpeg"
                alt=""
              />
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
                class="block mt-2 px-1 py-1 hover:rounded-md"
                :class="[textColor, hoverColor]"
                to="/#about"
                >Tentang Kami</NuxtLink
              >
            </li>

            <li>
              <NuxtLink
                class="block mt-2 hover:rounded-md px-1 py-1"
                :class="[textColor, hoverColor]"
                to="/#programs"
                >Program</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                class="block mt-2 hover:rounded-md px-1 py-1"
                :class="[textColor, hoverColor]"
                to="/#testimonials"
                >Testimoni</NuxtLink
              >
            </li>
            <!-- <li>
              <NuxtLink
                class="block mt-2 hover:rounded-md hover:px-1 hover:py-1"
                :class="[textColor, hoverColor]"
                to="career"
                >Karir</NuxtLink
              >
            </li> -->
            <li>
              <p
                class="flex mt-2 cursor-pointer hover:rounded-md px-1 py-1"
                :class="[textColor, hoverColor]"
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
                  px-5
                "
                @mouseleave="isHiddenPopup = !isHiddenPopup"
                v-if="!isHiddenPopup"
              >
                <NuxtLink
                  class="
                    text-slate-600
                    font-normal
                    hover:bg-slate-100 hover:rounded-md
                  "
                  to="/articles"
                  >Artikel</NuxtLink
                >
                <NuxtLink
                  class="
                    text-slate-600
                    font-normal
                    hover:bg-slate-100 hover:rounded-md
                  "
                  to="/faqs"
                  >FAQ</NuxtLink
                >
              </div>
            </li>

            <li class="px-1 py-1">
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
              absolute
              flex-col
              px-7
              mt-2
              py-5
              w-full
              h-screen
              space-y-2
              font-semibold
              drop-shadow-sm
              text-white
              border-t border-slate-200
            "
            :class="navColor"
          >
            <ul>
              <li class="mb-10 mt-5" v-on:click="isHidden = !isHidden">
                <NuxtLink
                  class="hover:bg-slate-50"
                  :class="textColor"
                  to="/#about"
                  >Tentang Kami</NuxtLink
                >
              </li>
              <li class="my-10" v-on:click="isHidden = !isHidden">
                <NuxtLink :class="textColor" to="/#programs">Program</NuxtLink>
              </li>
              <li class="my-10" v-on:click="isHidden = !isHidden">
                <NuxtLink :class="textColor" to="/#testimonials"
                  >Testimoni</NuxtLink
                >
              </li>
              <!-- <li class="mb-6 mt-5" v-on:click="isHidden = !isHidden">
                <NuxtLink
                  :class="textColor"
                  to="/career"
                  >Karir</NuxtLink
                >
              </li> -->
              <li class="my-10">
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
                    font-normal
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
                  class="
                    p-2
                    bg-pink-500
                    mb-4
                    text-white
                    hover:bg-pink-600
                    rounded-md
                  "
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
        v-on:click="fabContact = !fabContact"
      />
      <Nuxt
        class=""
        @click="isHidden = !isHidden"
        v-else
        v-on:click="fabContact = !fabContact"
      />
      <FooterSection />
      <a
        id="fab"
        class="
          fixed
          z-50
          bottom-24
          right-8
          w-12
          h-12
          md:w-12 md:h-12
          rounded-full
          drop-shadow-lg
          flex
          justify-center
          items-center
          bg-slate-700
          hover:bg-slate-600
          animate-bounce
          duration-300
        "
        v-show="show"
        href="#"
      >
        <img src="~/assets/images/arrow-up-white-24.png" alt="" />
      </a>

      <div
        class="
          flex
          fixed
          z-50
          bottom-10
          -right-16
          mb-6
          flex-col
          w-56
          bg-white
          p-7
          mr-40
          gap-2
          text-center
          rounded-md
          shadow-md shadow-slate-600
        "
        v-if="fabContact"
      >
      <div class="flex flex-row justify-end mb-2 -mt-4 -mr-2 cursor-pointer z-50"  v-on:click="fabContact = !fabContact">
        <img class="w-3" src="~/assets/images/close.png" alt="">
      </div>
        <a
          class="
            border-2 border-green-500
            text-green-500
            hover:bg-green-500 hover:text-white
            p-1
            text-base
            rounded-full
          "
          :href="`https://wa.me/${waNumber}?text=Halo,%20admin...`"
        >
          Whatsapp
        </a>
        <a
          class="
            border-2 border-pink-500
            text-pink-500
            hover:bg-pink-500 hover:text-white
            p-1
            text-base
            rounded-full
          "
          href="https://www.instagram.com/thebright.brightfuture/"
        >
          Instagram
        </a>
        <a
          class="
            border-2 border-slate-800
            text-slate-800
            hover:bg-slate-800 hover:text-white
            p-1
            text-base
            rounded-full
          "
          href="https://www.tiktok.com/@thebright_learningcenter?is_from_webapp=1&sender_device=pc"
        >
          Tiktok
        </a>

        <a
          class="
            border-2 border-red-500
            text-red-500
            hover:bg-red-500 hover:text-white
            p-1
            text-base
            rounded-full
          "
          href="https://www.youtube.com/@thebrightkarawangbimbeldan9883"
        >
          Youtube
        </a>

        <a
          class="
            border-2 border-sky-500
            text-sky-500
            hover:bg-sky-500 hover:text-white
            p-1
            text-base
            rounded-full
          "
          href="https://goo.gl/maps/SVo3vfphAiD9wV5MA"
        >
          Google Map
        </a>
      </div>

      <div
        class="
          flex flex-col
          fixed
          z-50
          bottom-10
          right-8
          w-14
          h-14
          md:w-12 md:h-12
          rounded-md
          drop-shadow-lg
          justify-center
          items-center
          gap-4
          bg-slate-700
          hover:bg-slate-600
          p-2
          cursor-pointer
        "
        title="Media Sosial"
        v-on:click="fabContact = !fabContact"
      >
        <img class="w-full" src="~/assets/images/logo-white.png" alt="" />
      </div>
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
      hoverColor: "hover:bg-slate-50",
      waNumber: process.env.WHATSAPP_NUMBER,
      fabContact: false,
    };
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      if (window.scrollY > 1000) {
        this.navColor = "bg-white";
        this.textColor = "text-slate-700 hover:text-slate-800";
        this.menuTheme = "menu-slate-64.png";
        this.closeTheme = "close-slate-64.png";
        this.upDirection = "arrow-up-slate-24.png";
        this.downDirection = "arrow-down-slate-24.png";
        this.navOpacity = "opacity-1";
        this.show = true;
        this.hoverColor = "hover:bg-slate-50";
      } else {
        this.navColor = "bg-white";
        this.textColor = "text-slate-700 hover:text-slate-800";
        this.menuTheme = "menu-slate-64.png";
        this.closeTheme = "close-slate-64.png";
        this.upDirection = "arrow-up-slate-24.png";
        this.downDirection = "arrow-down-slate-24.png";
        this.navOpacity = "opacity-1";
        this.show = false;
        this.hoverColor = "hover:bg-slate-50";
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
