<template>
  <section
    id="programs"
    class="bg-blue-500 px-20 md:px-12 md:py-20 md:bg-white py-4">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-white text-2xl font-bold text-center md:text-slate-600">
        Program
      </h2> 
      <!-- Heading -->
      <h1
        class="mt-2 py-0 md:py-4 text-2xl md:text-4xl font-semibold text-white md:text-blue-600">
        Pilih
        <span class="text-pink-400 md:text-slate-500">Program</span> yang Anda
        Inginkan
      </h1>

      <div
        class="flex flex-col md:flex-row md:bg-blue-500 rounded-lg md:gap-4 px-6 mt-6 md:mt-36 py-4 md:py-0">
        <div
          class="flex flex-col bg-white p-5 max-w-md text-start rounded-md shadow-sm md:-mt-28 mb-4 shadow-slate-600 md:mb-20 md:transform md:transition md:duration-500 md:hover:scale-125 md:hover:z-10 opacity-95">
          <img src="~/assets/images/program-purple.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            Bimbingan Belajar
          </h2>
          <p class="text-slate-500 text-xs font-semibold">25 Student</p>
          <h2
            class="text-end text-sm font-semibold text-blue-400 cursor-pointer hover:text-blue-600 my-8">
            Selengkapnya
          </h2>
        </div>
        <div
          class="flex flex-col bg-white p-5 max-w-md text-start rounded-md shadow-sm md:-mt-28 mb-4 shadow-slate-600 md:mb-20 md:transform md:transition md:duration-500 md:hover:scale-125 md:hover:z-10 opacity-95">
          <img src="~/assets/images/program-orange.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            Bahasa Inggris
          </h2>
          <p class="text-slate-500 text-xs font-semibold">25 Student</p>
          <h2
            class="text-end text-sm font-semibold text-blue-400 cursor-pointer hover:text-blue-600 my-8">
            Selengkapnya
          </h2>
        </div>
        <div
          class="flex flex-col bg-white p-5 max-w-md text-start rounded-md shadow-md md:-mt-28 mb-4 md:mb-20 transform transition duration-500 md:hover:scale-125 md:hover:z-10 px-8 opacity-95">
          <img src="~/assets/images/program-yellow.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            English for Adult
          </h2>
          <p class="text-slate-500 text-xs font-semibold">25 Student</p>
          <h2
            class="text-end text-sm font-semibold text-blue-400 cursor-pointer hover:text-blue-600 my-8">
            Selengkapnya
          </h2>
        </div>
        <div
          class="flex flex-col bg-white p-5 max-w-md text-start rounded-md shadow-md md:-mt-28 mb-4 md:mb-20 md:transform md:transition md:duration-500 md:hover:scale-125 md:hover:z-10 opacity-95">
          <img src="~/assets/images/program-blue.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            English for Specific Purposes
          </h2>
          <p class="text-slate-500 text-xs font-semibold">25 Student</p>
          <h2
            class="text-end text-sm font-semibold text-blue-400 cursor-pointer hover:text-blue-600 my-2">
            Selengkapnya
          </h2>
        </div>
        <div
          class="flex flex-col bg-white p-5 max-w-md text-start rounded-md shadow-md md:-mt-28 mb-4 md:mb-20 md:transform md:transition md:duration-500 md:hover:scale-125 md:hover:z-10 opacity-95">
          <img src="~/assets/images/program-purple.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            Kursus Bahasa Lainnya
          </h2>
          <p class="text-slate-500 text-xs font-semibold">25 Student</p>
          <h2
            class="text-end text-sm font-semibold text-blue-400 cursor-pointer hover:text-blue-600 my-2">
            Selengkapnya
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProgramsSection",
};
</script>

<style></style>
