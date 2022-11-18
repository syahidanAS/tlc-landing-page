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
              text-center
              mt-4
              md:text-5xl md:text-left
              text-slate-800
            "
          >
            The Bright <span class="text-blue-300">Learning Center</span>
          </h1>
          <p class="max-w-sm text-center md:text-left text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            magni nemo cum aspernatur consequatur expedita, accusantium.
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
              >Register Now!</a
            >
          </div>
        </div>
        <!-- Image -->
        <div class="md:w-1/2">
          <img src="~/assets/hero.png" alt="" />
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
            <img src="~/assets/op-1.png" class="w-16" alt="" />
            <h5 class="text-lg font-bold">Online Course</h5>
            <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p>
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
            <img src="~/assets/op-2.png" class="w-16 mx-auto" alt="" />
            <h5 class="text-lg font-bold">Expert Tutoring</h5>
            <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p>
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
            <img src="~/assets/op-3.png" class="w-16 mx-auto" alt="" />
            <h5 class="text-lg font-bold">Effective Methods</h5>
            <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p>
          </div>
        </div>
        <!-- Button -->
        <div class="my-16">
          <a
            href="#"
            class="
              p-3
              px-6
              pt-2
              text-white
              bg-brightRed
              rounded-full
              baseline
              hover:bg-brightRedLight
            "
            >Special Offer!</a
          >
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
