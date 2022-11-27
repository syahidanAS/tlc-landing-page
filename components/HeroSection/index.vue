<template>
  <section id="hero">
    <div
      class="container flex flex-col-reverse md:flex-row items-center px-20 mx-auto space-y-0 md:space-y-0">
      <!-- Left Item -->
      <div class="flex flex-col space-y-8 md:w-1/2">
        <h1
          class="max-w-small text-2xl font-bold leading-snug text-center mt-4 md:text-5xl md:text-left text-slate-800 md:leading-snug md:text-4xl">
          Ciptakan Masa Depan yang Lebih Baik<span class="text-white">
            Bersama Kami</span>
        </h1>
        <p
          class="max-w-sm text-center md:text-left text-slate-700 md: leading-relaxed">
          Learning Center Paling Terpercaya di Karawang
        </p>
        <div class="flex justify-center md:justify-start">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-slate-700 rounded-md hover:bg-slate-800"
            >Daftar Sekarang!</a>
        </div>
      </div>
      <!-- Image -->
      <div class="md:w-1/2">
        <img src="~/assets/images/hero.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style></style>
