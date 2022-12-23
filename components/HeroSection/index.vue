<template>
  <section id="hero">
    <div
      class="
        container
        flex flex-col-reverse
        md:flex-col-reverse
        lg:flex-row
        xl:flex-row
        2xl:flex-row
        items-center
        px-5
        md:px-0
        lg:px-20
        xl:px-20
        2xl:px-48
        mx-auto
        space-y-14
        md:space-y-10
      "
    >
      <!-- Left Item -->
      <div class="flex flex-col space-y-8 md:w-1/2">
        <h1
          class="
            max-w-small
            font-bold
            leading-6
            text-center
            mt-4
            text-2xl
            md:text-4xl
            lg:text-4xl
            xl:text-5xl
            2xl:text-5xl
            lg:text-left
            text-slate-800
          "
        >
          Ciptakan Masa Depan yang Lebih Baik<span class="text-white text-center lg:text-left">
            Bersama Kami</span
          >
        </h1>
        <p
          class="
            max-w-sm
            text-center
            text-white
            font-semibold
            leading-relaxed
            md:text-left
          "
        >
          Learning Center Paling Terpercaya di Karawang
        </p>
        <div class="flex justify-center lg:justify-start">
          <a
            :href="registerLink"
            class="
              p-3
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
</template>

<script>
export default {
  name: "HeroSection",
  data(){
    return{
      registerLink: process.env.REGISTRATION_FORM
    }
  }
};
</script>

<style></style>
