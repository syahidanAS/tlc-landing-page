<template>
  <section
    id="programs"
    class="bg-blue-500 px-5 md:px-12 md:py-3 md:bg-white py-4"
  >
    <div class="max-w-6xl mx-auto text-center py-12 px-4 md:py-0 md:px-0">
      <h2 class="text-white text-2xl font-bold text-center md:text-slate-700">
        Program
      </h2>
      <!-- Heading -->
      <h1
        class="
          mt-2
          py-0
          md:py-4
          text-lg
          md:text-4xl
          font-semibold
          text-white
          md:text-blue-600
        "
      >
        Pilih
        <span class="text-pink-400 md:text-pink-400">Program</span> yang Anda
        Inginkan
      </h1>
      <p class="text-center text-white md:text-slate-600 text-md ">Kami memiliki tenaga pengajar profesional sebanyak 40+ yang siap mendampingi anda belajar</p>

      <div
        class="
          flex flex-col
          md:flex-row 
          md:bg-blue-500
          rounded-lg
          gap-1
          md:gap-1
          lg:gap-4
          mt-6
          md:mt-36
          py-4
          md:py-0
          lg:px-6
        "
        data-aos="fade-down"
      >
        <div
          class="
            flex flex-col
            bg-white
            p-5
            text-start
            rounded-md
            shadow-sm
            md:-mt-28
            mb-4
            shadow-slate-600
            md:mb-20
            md:transform
            md:transition
            md:duration-500
            md:hover:scale-125
            md:hover:z-10
            opacity-95
          "
        >
          <img src="~/assets/images/program-blue.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            Bimbingan Belajar
          </h2>
          <NuxtLink
            class="
              text-end text-sm
              font-semibold
              text-blue-400
              cursor-pointer
              hover:text-blue-600
              my-8
            "
            to="/programs/bimbingan-belajar"
          >
            Selengkapnya
          </NuxtLink>
        </div>
        <div
          class="
            flex flex-col
            bg-white
            p-5
            text-start
            rounded-md
            shadow-sm
            md:-mt-28
            mb-4
            shadow-slate-600
            md:mb-20
            md:transform
            md:transition
            md:duration-500
            md:hover:scale-125
            md:hover:z-10
            opacity-95
          "
        >
          <img src="~/assets/images/program-purple.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            Bahasa Inggris Untuk Anak
            <br>
          </h2>
          <NuxtLink
            class="
              text-end text-sm
              font-semibold
              text-blue-400
              cursor-pointer
              hover:text-blue-600
              my-8
            "
            to="/programs/bahasa-inggris"
          >
            Selengkapnya
        </NuxtLink>
        </div>
        <div
          class="
            flex flex-col
            bg-white
            p-5
            text-start
            rounded-md
            shadow-sm
            md:-mt-28
            mb-4
            shadow-slate-600
            md:mb-20
            md:transform
            md:transition
            md:duration-500
            md:hover:scale-125
            md:hover:z-10
            opacity-95
          "
        >
          <img src="~/assets/images/program-orange.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            English Course for Adults
          </h2>
          <NuxtLink
            class="
              text-end text-sm
              font-semibold
              text-blue-400
              cursor-pointer
              hover:text-blue-600
              my-8
            "
            to="/programs/english-course-for-adult"
          >
            Selengkapnya
          </NuxtLink>
        </div>
        <div
          class="
            flex flex-col
            bg-white
            p-5
            text-start
            rounded-md
            shadow-sm
            md:-mt-28
            mb-4
            shadow-slate-600
            md:mb-20
            md:transform
            md:transition
            md:duration-500
            md:hover:scale-125
            md:hover:z-10
            opacity-95
          "
        >
          <img src="~/assets/images/program-yellow.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            English for Specific Purposes
          </h2>
          <NuxtLink
            class="
              text-end text-sm
              font-semibold
              text-blue-400
              cursor-pointer
              hover:text-blue-600
              my-8
            "
            to="/programs/english-for-specific-purposes"
          >
            Selengkapnya
          </NuxtLink>
        </div>
        <div
          class="
            flex flex-col
            bg-white
            p-5
            text-start
            rounded-md
            shadow-sm
            md:-mt-28
            mb-4
            shadow-slate-600
            md:mb-20
            md:transform
            md:transition
            md:duration-500
            md:hover:scale-125
            md:hover:z-10
            opacity-95
          "
        >
          <img src="~/assets/images/program-green.png" alt="" />
          <h2 class="my-2 text-slate-700 text-md font-semibold">
            Kursus Bahasa Lainnya
          </h2>
          <NuxtLink
            class="
              text-end text-sm
              font-semibold
              text-blue-400
              cursor-pointer
              hover:text-blue-600
              my-8
            "
            to="/programs/kursus-bahasa-lainnya"
          >
            Selengkapnya
          </NuxtLink>
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
