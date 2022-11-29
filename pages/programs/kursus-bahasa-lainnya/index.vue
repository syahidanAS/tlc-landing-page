<template>
  <div class="container mx-auto px-24 py-14">
    <NuxtLink
      class="flex flex-row text-sky-500 text-md gap-2 py-2"
      to="/#programs"
    >
      <img
        class="opacity-95"
        src="~/assets/images/arrow-left-sky-500-24.png"
        alt=""
      />
      Kembali
    </NuxtLink>

    <div class="md:pr-60">
      <h1 class="text-2xl md:text-4xl font-semibold text-slate-600 py-5">
        Kursus Bahasa Lainnya
    </h1>

    <p class="text-justify tex-md font-normal text-slate-700 mb-2">
      Selain program kursus Bahasa Inggris, kami menawarkan program kursus bahasa asing lainnya
      yang akan didampingi oleh tutor-tutor profesional dan berpengalaman dibidangnya
    </p>
<div class="overflow-x-auto relative my-4">
    <table class="w-full text-sm text-left text-white bg-slate-300">
        <thead class="text-xs text-white uppercase bg-slate-700">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Tingkat
                </th>
                <th scope="col" class="py-3 px-6">
                    Harga
                </th>
                <th scope="col" class="py-3 px-6">
                    Biaya Registrasi
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-slate-300 border-b text-slate-700 hover:bg-slate-200" v-for="list in priceList" :key="list.index">
                <th scope="row" class="py-4 px-6 font-medium text-slate-700 whitespace-nowrap">
                    {{ list.level }}
                </th>
                <td class="py-4 px-6">
                  {{ list.price }}
                </td>
                <td class="py-4 px-6">
                  {{ list.registration }}
                </td>
            </tr>
        </tbody>
    </table>
</div>
<a class="py-2 px-3 border-2 border-sky-500 text-lg font-normal text-sky-500 rounded-md my-2 hover:bg-sky-500 hover:text-white" href="https://thebrightcourse.com/register">Daftar Langsung</a>
<a class="py-2 px-3 border-2 border-green-500 text-lg font-normal text-green-500 rounded-md my-2 hover:bg-green-500 hover:text-white" href="https://wa.me/+6283815678057?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20Program%20Kursus%20Bahasa%20Lainnya">Tanya Kami</a> 
    </div>
  </div>
</template>

<script>
export default {
  name: "kursus-bahasa-lainnya",
  data(){
    return{
      priceList:[
        {
          level: "Bahasa Korea (Pre Beginner, Beginner, Pre Intermediate, Intermediate, Pre Advanced, Advanced)",
          price: "Rp 100.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        {
          level: "Bahasa Jepang (N1, N2, N3, N4, N5)",
          price: "Rp 100.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        {
          level: "Bahasa Jerman (A1, A2, B1, B2)",
          price: "Rp 100.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        
      ]
    }
  },
  head () {
    return {
        title: 'Kursus Bahasa Lainnya',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Kursus Bahasa Korea, Kursus Bahasa Jepang, Kursus Bahasa Jerman'
          }
        ]
    }
},
};
</script>

<style>
</style>