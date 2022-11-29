<template>
  <section
    id="articles"
    class=" px-20 md:px-0 pt-2 bg-white pb-0 md:pb-20 lg:px-32 md:pt-0 items-center"
  >
    <h2 class="text-slate-700 text-2xl font-bold text-center md:text-slate-600">
      Artikel dan Berita Terbaru
    </h2>
    <div class="flex flex-col md:flex-row px-0 pb-12 gap-4 mt-4 md:px-24 md:pb-0">
      <!-- Article 1 -->
      <div class="max-w-sm bg-white border-gray-200 rounded-lg shadow-md overflow-hidden">
        <a href="#">
          <img
            class="w-full h-44 hover:opacity-95"
            src="https://akcdn.detik.net.id/visual/2019/03/20/cc11ed7b-5c4a-43ad-8ed0-2492d0c36053_169.jpeg?w=650"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-lg text-slate-800 font-semibold tracking-tight hover:text-slate-600"
            >
              Memulai Karir Menjadi Seorang Sociopreneur
            </h5>
          </a>
          <span
            class="
              bg-blue-100
              text-blue-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
              dark:bg-blue-200 dark:text-blue-800
            "
            >Sosial</span>
            <br>
            <span class="text-sm my-2 text-slate-700 ">27 November 2022</span>
        </div>
      </div>
      <!-- Article 2 -->
      <div class="max-w-sm bg-white border-gray-200 rounded-lg overflow-hidden shadow-md">
        <a href="#">
          <img
            class="w-full h-44"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMsojLT0CVfFtNvFHcVNMxsFCRhbFXn1fzPg&usqp=CAU"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-lg text-slate-800 font-semibold tracking-tight hover:text-slate-600"
            >
              Metode Belajar Efektif Untuk Anak di Masa Pandemi
            </h5>
          </a>
          <span
            class="
              bg-blue-100
              text-blue-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
              dark:bg-blue-200 dark:text-blue-800
            "
            >Pendidikan</span>
            <br>
            <span class="text-sm my-2 text-slate-700 ">27 November 2022</span>
        </div>
      </div>
      <!-- Article 3 -->
      <div class="max-w-sm bg-white border-gray-200 rounded-lg overflow-hidden shadow-md">
        <a href="#">
          <img
            class="w-full h-44"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGXlmZS8UqGRao98zblE9_FmD5ZLE4sL9Xw&usqp=CAU"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-lg text-slate-800 font-semibold tracking-tight hover:text-slate-600"
            >
              Belajar Berhitung Dengan Metode Sempoa
            </h5>
          </a>
          <span
            class="
              bg-blue-100
              text-blue-800 text-xs
              font-semibold
              mr-2
              px-2.5
              py-0.5
              rounded
              dark:bg-blue-200 dark:text-blue-800
            "
            >Pendidikan</span>
            <br>
            <span class="text-sm my-2 text-slate-700 ">27 November 2022</span>
        </div>
      </div>
    </div>
    <div class="mt-0 md:mt-6 w-full text-center">
      <NuxtLink class="py-2 px-3 border-2 border-sky-500 my-4 text-blue-500 font-semibold rounded-md hover:bg-sky-500 hover:text-white" to="/articles">Tampilkan Lebih Banyak</NuxtLink>
    </div>
  </section>
  
</template>

<script>
export default {};
</script>

<style>
</style>