<template >
  <div class="flex flex-col bg-white container mx-auto px-24 py-14">
    <h1 class="text-2xl font-bold text-slate-700">Frequently Asked Question</h1>
    <h2 class="text-slate-600 font-normal mt-2 text-sm">
      Pertanyaan yang sering ditanyakan seputar The Bright Learning Center.
    </h2>

    <div class="flex flex-row mt-4">
      <input class="
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
        " id="find" type="text" placeholder="Cari pertanyaan" />
      <button class="px-6 rounded-md bg-sky-500 text-white hover:bg-sky-600">
        Cari
      </button>
    </div>
    <!-- Content -->
   
      <div class="grid md:grid-cols-12 gap-5 my-5">
        <aside class="md:col-span-3 md:pt-0 border-[1px] border-slate-300 rounded-md grid grid-cols-1 divide-y  max-h-60 overflow-scroll">
         <div class="py-2 px-4 hover:bg-sky-300 grid grid-cols-1 divide-y hover:cursor-pointer hover:text-white">
          <h3 class="text-normal text-semibold text-slate-700 hover:cursor-pointer hover:text-white">Seputar Pendaftaran</h3>
         </div>

         <div class="py-2 px-4 hover:bg-sky-300 grid grid-cols-1 divide-y hover:cursor-pointer hover:text-white">
          <h3 class="text-normal text-semibold text-slate-700 hover:cursor-pointer hover:text-white">Seputar Program</h3>
         </div>

         <div class="py-2 px-4 hover:bg-sky-300 grid grid-cols-1 divide-y hover:cursor-pointer hover:text-white">
          <h3 class="text-normal text-semibold text-slate-700 hover:cursor-pointer hover:text-white">Seputar Jadwal Les</h3>
         </div>
         
        </aside>
        <main class="md:col-span-9 p-4 border-[1px] border-slate-300 rounded-md" >
          <div class="flex flex-col rounded-md shadow-sm shadow-slate-400 p-2 my-2" v-on:click="index = !index">
            <div class="
              flex flex-row    
              text-slate-700
              justify-between
              items-center
              px-2
              hover:cursor-pointer
            ">
              <h1 class="text-sm font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, illo.
              </h1>
              <img class="w-3 h-3" src="~/assets/images/arrow-down-slate-24.png" alt="arrow" />
            </div>

            <div class="px-2 text-sm text-slate-600 my-4 border-t-[1px] py-2" v-if="!index">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam voluptates blanditiis
                sapiente, recusandae rerum est ut autem veritatis, laboriosam eaque magni natus modi explicabo deserunt
                obcaecati, et quasi cum.</p>
            </div>
          </div>
          
          
          
        </main>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      index: true
    }
  }
};
</script>

<style>

</style>