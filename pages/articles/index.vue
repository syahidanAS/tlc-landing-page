<template >
  <div class="flex flex-col bg-white container mx-auto px-24 py-14">
    <h1 class="text-2xl font-bold text-slate-700">
      Artikel dan Berita The Bright Learning Center
    </h1>
    <h2 class="text-slate-600 font-normal mt-2 text-sm">
      Artikel dan berita seputar pengetahuan, kegiatan, dan prestasi The Bright
      Learning Center
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
        placeholder="Cari artikel atau berita"
      />
      <button class="px-6 rounded-md bg-sky-500 text-white hover:bg-sky-600">
        Cari
      </button>
    </div>

    <div class="flex flex-wrap mt-4 gap-2">
      <button
        class="
          text-xs
          font-semibold
          text-sky-500
          border-2 border-sky-500
          hover:bg-sky-500
          p-1
          rounded-md
          hover:text-white
        "
      >
        Pendidikan
      </button>
      <button
        class="
          text-xs
          font-semibold
          text-sky-500
          border-2 border-sky-500
          hover:bg-sky-500
          p-1
          rounded-md
          hover:text-white
        "
      >
        Sosial
      </button>
      <button
        class="
          text-xs
          font-semibold
          text-sky-500
          border-2 border-sky-500
          hover:bg-sky-500
          p-1
          rounded-md
          hover:text-white
        "
      >
        Kegiatan
      </button>
      <button
        class="
          text-xs
          font-semibold
          text-sky-500
          border-2 border-sky-500
          hover:bg-sky-500
          p-1
          rounded-md
          hover:text-white
        "
      >
        Prestasi
      </button>
    </div>

    <div
      class="flex flex-col container mx-auto py-6 md:grid md:grid-cols-4 gap-4"
    >
      <!-- Card Items -->
      <div
        class="
          col-span-1
          flex flex-col
          bg-white
          border-2
          overflow-hidden
          rounded-md
        "
      >
        <img
          class="w-full h-36"
          src="https://static01.nyt.com/images/2021/07/12/nyregion/12-THE-MORNING-NL-lede/merlin_187216488_e4583e93-36b2-4109-8458-6ea155710ed0-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
          alt=""
        />
        <!-- Card Body -->
        <div class="mx-2 my-2">
          <NuxtLink
            class="
              my-2
              font-semibold
              text-slate-700 text-base
              hover:underline hover:cursor-pointer
            "
            to="/articles/Ini Adalah Artikel Mantap Jiwa"
            >Lorem ipsum, dolor sit amet consectetur adipisicing </NuxtLink
          >
          <span
            class="
              my-2
              bg-blue-100
              text-blue-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
              dark:bg-blue-200 dark:text-blue-800
            "
            >Pendidikan</span
          >
          <p class="my-2 text-xs font-normal text-slate-600">
            29 November 2022
          </p>
        </div>
      </div>
      <!-- End of card items -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>