<template >
  <div
    class="
      flex flex-col
      bg-white
      container
      mx-auto
      px-5
      md:px-24
      py-14
      lg:pb-52
      2xl:pb-56 2xl:px-48
    "
  >
    <h1 class="text-2xl font-bold text-slate-700">Frequently Asked Question</h1>
    <h2 class="text-slate-600 font-normal mt-2 text-sm">
      Pertanyaan yang sering ditanyakan seputar The Bright Learning Center.
    </h2>

    <div class="flex flex-row mt-4">
      <input
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none focus:shadow-outline
        "
        id="find"
        type="text"
        placeholder="Cari pertanyaan"
        v-model="searchInput"
  
      />
      <button
        class="px-6 rounded-md bg-sky-500 text-white hover:bg-sky-600 mx-2"
        @click="searchFaqs()"
      >
        Cari
      </button>
    </div>
    <!-- Content -->

    <div class="grid lg:grid-cols-12 gap-5 my-5">
      <main class="md:col-span-9 px-2 border-[1px] border-slate-300 rounded-md">
        <!-- FAQs Skeleton -->
        <div v-if="isLoading">
          <div
            class="
              flex flex-col
              h-10
              rounded-md
              shadow-sm
              animate-pulse
              bg-gray-300
              p-2
              my-2
            "
            v-for="item in skeletonItems"
            :key="item.index"
          ></div>
        </div>

        <div class="flex flex-col my-36 gap-2" v-else-if="notFound">
          <h1 class="text-md font-semibold text-slate-700 text-center">
            Mohon maaf pertanyaan tidak dapat ditemukan 
          </h1>
          <button class="p-1 border-2 border-sky-500 text-sky-500 rounded-md hover:bg-sky-500 mx-auto hover:text-white" @click="getFaqs()">Kembali</button>
        </div>

        <!-- Main FAQs -->
        <div
          class="
            flex flex-col
            rounded-md
            shadow-sm shadow-slate-400
            p-2
            py-4
            my-2
            bg-[#f0f6fa]
          "
          v-for="item in faqs"
          :key="item.index"
          v-on:click="item.is_open = !item.is_open"
          v-else
        >
          <div
            class="
              flex flex-row
              text-slate-700
              justify-between
              items-center
              hover:cursor-pointer
            "
          >
            <h1 class="text-sm font-semibold text-slate-700">
              {{ item.question }}
            </h1>
            <img
              class="w-3 h-3"
              src="~/assets/images/arrow-up-slate-24.png"
              alt="arrow"
              v-if="item.is_open"
            />
            <img
              class="w-3 h-3"
              src="~/assets/images/arrow-down-slate-24.png"
              alt="arrow"
              v-else
            />
          </div>

          <div
            class="
              px-2
              text-sm text-slate-600
              my-4
              border-t-[1px]
              py-2
              cursor-pointer
              bg-white
              rounded-md
            "
            v-if="item.is_open"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: true,
      isLoading: false,
      notFound: false,
      faqs: [],
      isOpen: true,
      searchInput: null,

      skeletonItems: {
        skl1: {},
        skl2: {},
        skl3: {},
        skl4: {},
        skl2: {},
        skl5: {},
        skl5: {},
      },
    };
  },
  methods: {
    toggle() {
      if (this.accordionClasses == "hidden") {
        this.accordionClasses = "";
      } else {
        this.accordionClasses = "hidden";
      }
    },
    async getFaqs() {
      this.isLoading = true;
      try {
        this.notFound = false;
        const payload = await this.$axios.$get("faqs");
        if (payload.data.length > 0) {
          this.notFound = false;
          this.faqs = payload.data;
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.notFound = true;
        }
      } catch (error) {
        this.isLoading = true;
        this.notFound = true;
      }
    },
    async searchFaqs() {
      this.isLoading = true;
      try {
        this.notFound = false;
        const payload = await this.$axios.$post("faqs/search", {
          questionOrAnswer: this.searchInput,
        });
        if (payload.data.length > 0) {
          this.notFound = false;
          this.faqs = payload.data;
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.notFound = true;
        }
      } catch (error) {
        this.isLoading = true;
        this.notFound = true;
      }
    },
  },
  mounted() {
    this.getFaqs();
  },
};
</script>

<style>
</style>