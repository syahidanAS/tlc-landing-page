<template>
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
          class="flex flex-col transform transition duration-500 hover:scale-125 hover:z-10 hover:bg-white w-3/4 my-2 mx-auto items-center p-6 space-y-6 shadow-sm shadow-slate-600 rounded-lg bg-veryLightGray md:w-1/3">
          <img src="~/assets/images/trusted.svg" class="w-16" alt="" />
          <h5 class="text-lg font-bold text-slate-800">Trusted</h5>
          <!-- <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p> -->
        </div>

        <!-- Oportunity 2 -->
        <div
          class="transform transition duration-500 hover:scale-125 hover:z-10 flex-col w-3/4 my-2 mx-auto items-center p-6 py-6 shadow-md shadow-slate-600 space-y-6 rounded-lg bg-blue-400 text-white md:flex md:w-1/3">
          <img
            src="~/assets/images/innovative.svg"
            class="w-16 mx-auto"
            alt=""/>
          <h5 class="text-lg font-bold text-white">Innovative</h5>
          <!-- <p class="text-sm text-darkGrayishBlue">
              Competently morph resource sucking ideas without accurate
              innovation
            </p> -->
        </div>

        <!-- Oportunity 3 -->
        <div
          class="transform transition duration-500 hover:scale-125 hover:z-10 hover:bg-white flex-col w-3/4 my-2 mx-auto items-center p-6 space-y-6 shadow-sm shadow-slate-600 rounded-lg bg-veryLightGray md:flex md:w-1/3">
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
</template>

<script>
export default {
  name: "OportunitySection",
};
</script>

<style></style>
