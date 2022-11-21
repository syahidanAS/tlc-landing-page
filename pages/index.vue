<template>
  <div>
    <section id="hero">
      <div
        class="
          container
          flex flex-col-reverse
          md:flex-row
          items-center
          px-20
          mx-auto
          space-y-0
          md:space-y-0
        "
      >
        <!-- Left Item -->
        <div class="flex flex-col space-y-8 md:w-1/2">
          <h1
            class="
              max-w-small
              text-4xl
              font-bold
              leading-snug
              text-center
              mt-4
              md:text-5xl md:text-left
              text-slate-800
              md:leading-snug
            "
          >
            Ciptakan Masa Depan yang Lebih Baik<span class="text-blue-300">
              Bersama Kami</span
            >
          </h1>
          <p
            class="
              max-w-sm
              text-center
              md:text-left
              text-slate-700
              md:
              leading-relaxed
            "
          >
            Learning Center Paling Terpercaya di Karawang
          </p>
          <div class="flex justify-center md:justify-start">
            <a
              href="#"
              class="
                p-3
                px-6
                pt-2
                text-white
                bg-slate-700
                rounded-md
                hover:bg-slate-800
              "
              >Daftar Sekarang!</a
            >
          </div>
        </div>
        <!-- Image -->
        <div class="md:w-1/2">
          <img src="~/assets/images/hero.png" alt="" />
        </div>
      </div>
    </section>

    <!-- Oportunity -->
    <section id="oportunity">
      <!-- Container to heading and testm blocks -->
      <div class="max-w-6xl mx-auto mt-32 text-center">
        <!-- Heading -->
        <h2 class="text-2xl font-bold text-center text-slate-600">
          Our learning oportunity
        </h2>

        <!-- Oportunity Container -->
        <div class="flex flex-col mt-10 md:flex-row md:space-x-6">
          <!-- Oportunity 1 -->
          <div
            class="
              flex flex-col
              transform
              transition
              duration-500
              hover:scale-125 hover:z-10 hover:bg-white
              w-3/4
              my-2
              mx-auto
              items-center
              p-6
              space-y-6
              shadow-sm shadow-slate-600
              rounded-lg
              bg-veryLightGray
              md:w-1/3
            "
          >
            <img src="~/assets/images/trusted.svg" class="w-16" alt="" />
            <h5 class="text-lg font-bold text-slate-800">Trusted</h5>
            <!-- <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p> -->
          </div>

          <!-- Oportunity 2 -->
          <div
            class="
              transform
              transition
              duration-500
              hover:scale-125 hover:z-10
              flex-col
              w-3/4
              my-2
              mx-auto
              items-center
              p-6
              py-6
              shadow-md shadow-slate-600
              space-y-6
              rounded-lg
              bg-blue-400
              text-white
              md:flex md:w-1/3
            "
          >
            <img
              src="~/assets/images/innovative.svg"
              class="w-16 mx-auto"
              alt=""
            />
            <h5 class="text-lg font-bold text-white">Innovative</h5>
            <!-- <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p> -->
          </div>

          <!-- Oportunity 3 -->
          <div
            class="
              transform
              transition
              duration-500
              hover:scale-125 hover:z-10 hover:bg-white
              flex-col
              w-3/4
              my-2
              mx-auto
              items-center
              p-6
              space-y-6
              shadow-sm shadow-slate-600
              rounded-lg
              bg-veryLightGray
              md:flex md:w-1/3
            "
          >
            <img src="~/assets/images/price.svg" class="w-16 mx-auto" alt="" />
            <h5 class="text-lg font-bold text-slate-800">Affordable Price</h5>
            <!-- <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p> -->
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-28 px-20 mb-16 md:px-12 md:py-32">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-center text-slate-600">
          Tentang Kami
        </h2>
        <!-- Heading -->
        <h1 class="py-4 text-3xl md:text-4xl font-semibold text-blue-600">
          Visi <span class="text-slate-500">&</span> Misi
        </h1>
        <p class="text-slate-800 text-lg text-justify md:mx-20 font-semibold">
          The Bright Learning Center menjadi lembaga non formal yang sukses
          terpercaya, inovatif, dan bermanfaat bagi sesama
        </p>

        <ul
          class="
            mb-8
            space-y-4
            text-left text-slate-700
            font-semibold
            pt-4
            md:mx-auto md:px-24
          "
        >
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Melayani peserta didik sepenuh hati dengan mengutamakan kualitas
              dalam mengajar</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Melakukan pembaharuan pada perencanaan dan pembuatan program yang
              inovatif secara berkesinambungan sesuai kebutuhan customer</span
            >
          </li>
          <li class="flex items-center space-x-3">
            <!-- Icon -->
            <svg
              class="flex-shrink-0 w-5 h-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              >Meluaskan manfaat bagi sesama lewat pendidikan dengan memberikan
              bantuan moral maupun moril</span
            >
          </li>
        </ul>
      </div>

      <!-- About Container -->
      <div
        class="
          flex flex-col
          gap-7
          mx-auto
          mt-10
          md:flex-row md:space-x-6 md:px-20
          items-center
        "
      >
        <div>
          <h2 class="text-slate-800 font-bold text-2xl">
            We <span class="text-blue-500">Teach</span>
          </h2>
          <p class="text-md font-semibold text-slate-800 text-justify">
            Membimbing peserta didik dalam menguasai pelajaran di sekolah dan
            mengajarkan bahasa asing secara terintegrasi sesuai kebutuhan
            customer
          </p>
        </div>
        <div>
          <h2 class="text-slate-800 font-bold text-2xl">
            We <span class="text-blue-500">Share</span>
          </h2>
          <p class="text-md font-semibold text-slate-800 text-justify">
            Berkontribusi dalam kegiatan sosial dengan memberikan serta
            menyalurkan bantuan seperti: beasiswa, trauma healing, kegiatan
            kerelawanan, dan pengabdian masyarakat
          </p>
        </div>
        <div>
          <h2 class="text-slate-800 font-bold text-2xl">
            We <span class="text-blue-500">Care</span>
          </h2>
          <p class="text-md font-semibold text-slate-800 text-justify">
            Meningkatkan kepedulian terhadap sesama dengan berperan aktif dalam
            kegiatan sosial yang tidak terlepas dari nilai-nilai
            sociopreneurship yang menjadi prinsip dasar The Bright Learning
            Center
          </p>
        </div>
      </div>
    </section>


    <!-- Program Section -->
    <section id="programs" class="bg-blue-500 px-20 mb-16 md:px-12 md:py-32 md:bg-white py-4">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-white text-2xl font-bold text-center md:text-slate-600">Program</h2>
        <!-- Heading -->
        <h1 class="mt-2 py-0 md:py-4 text-2xl md:text-4xl font-semibold text-white md:text-blue-600">
          Temukan <span class="text-pink-400 md:text-slate-500">Program</span> yang Anda Mau
        </h1>

        <div
          class="
            flex flex-col
            md:flex-row
            md:bg-blue-500
            rounded-lg
            md:gap-4
            px-6
            mt-6
            md:mt-36
            py-4
            md:py-0
          "
        >
          <div
            class="
              flex flex-col
              bg-white
              p-5
              mb-4
              max-w-lg
              md:max-w-md
              text-start
              rounded-md
              shadow-md
              md:-mt-28
              md:mb-20
              md:transform
              md:transition
              md:duration-500
              md:hover:scale-125
              md:hover:z-10
            "
          >
            <img src="~/assets/images/program-purple.png" alt="" />
            <h2 class="my-2 text-slate-700 text-md font-semibold">
              Bimbingan Belajar
            </h2>
            <p class="text-slate-500 text-xs font-semibold">25 Student</p>
            <h2
              class="
                text-end text-sm
                font-semibold
                text-blue-400
                cursor-pointer
                hover:text-blue-600
                my-8
              "
            >
              Selengkapnya
            </h2>
          </div>
          <div
            class="
              flex flex-col
              bg-white
              p-5
              max-w-md
              text-start
              rounded-md
              shadow-md
              md:-mt-28
              mb-4
              md:mb-20
              md:transform
              md:transition
              md:duration-500
              md:hover:scale-125
              md:hover:z-10
            "
          >
            <img src="~/assets/images/program-orange.png" alt="" />
            <h2 class="my-2 text-slate-700 text-md font-semibold">
              Bahasa Inggris
            </h2>
            <p class="text-slate-500 text-xs font-semibold">25 Student</p>
            <h2
              class="
                text-end text-sm
                font-semibold
                text-blue-400
                cursor-pointer
                hover:text-blue-600
                my-8
              "
            >
              Selengkapnya
            </h2>
          </div>
          <div
            class="
              flex flex-col
              bg-white
              p-5
              max-w-md
              text-start
              rounded-md
              shadow-md
              md:-mt-28
              mb-4
              md:mb-20
              transform
              transition
              duration-500
              md:hover:scale-125 md:hover:z-10
              px-8
            "
          >
            <img src="~/assets/images/program-yellow.png" alt="" />
            <h2 class="my-2 text-slate-700 text-md font-semibold">
              English for Adult
            </h2>
            <p class="text-slate-500 text-xs font-semibold">25 Student</p>
            <h2
              class="
                text-end text-sm
                font-semibold
                text-blue-400
                cursor-pointer
                hover:text-blue-600
                my-8
              "
            >
              Selengkapnya
            </h2>
          </div>
          <div
            class="
              flex flex-col
              bg-white
              p-5
              max-w-md
              text-start
              rounded-md
              shadow-md
              md:-mt-28
              mb-4
              md:mb-20
              md:transform
              md:transition
              md:duration-500
              md:hover:scale-125
              md:hover:z-10
            "
          >
            <img src="~/assets/images/program-blue.png" alt="" />
            <h2 class="my-2 text-slate-700 text-md font-semibold">
              English for Specific Purposes
            </h2>
            <p class="text-slate-500 text-xs font-semibold">25 Student</p>
            <h2
              class="
                text-end text-sm
                font-semibold
                text-blue-400
                cursor-pointer
                hover:text-blue-600
                my-2
              "
            >
              Selengkapnya
            </h2>
          </div>
          <div
            class="
              flex flex-col
              bg-white
              p-5
              max-w-md
              text-start
              rounded-md
              shadow-md
              md:-mt-28
              mb-4
              md:mb-20
              md:transform
              md:transition
              md:duration-500
              md:hover:scale-125
              md:hover:z-10
            "
          >
            <img src="~/assets/images/program-purple.png" alt="" />
            <h2 class="my-2 text-slate-700 text-md font-semibold">
              Kursus Bahasa Lainnya
            </h2>
            <p class="text-slate-500 text-xs font-semibold">25 Student</p>
            <h2
              class="
                text-end text-sm
                font-semibold
                text-blue-400
                cursor-pointer
                hover:text-blue-600
                my-2
              "
            >
              Selengkapnya
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
