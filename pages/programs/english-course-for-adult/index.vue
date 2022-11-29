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
      Program English Course for Adults
    </h1>

    <p class="text-justify tex-md font-normal text-slate-700 mb-2">
      English Course for Adults adalah rangkaian kursus Bahasa Inggris secara
      menyeluruh yang di rancang khusus oleh The Bright bagi usia remaja
      sampai dewasa. Program ini terdiri dari 12 level yaitu Beginner (1,2,3),
      Intermediate (1,2,3), High Intermediate (1,2,3), dan Advanced (1,2,3).
    </p>
    <p class="text-justify tex-md font-normal text-slate-700 mb-2">
      Program ini di rancang khusus untuk pembelajaran secara menyeluruh,
      sehingga anda dapat menguasai Bahasa Inggris dari level dasar sampai
      mahir. Di setiap level nya, terdiri dari 16 lesson (16 pertemuan) dan di
      akhir level anda diharuskan mengikuti Final Test untuk mengukur
      pemahaman Bahasa Inggris anda yang sudah anda pelajari di level
      sebelumnya, sehingga anda siap untuk melanjutkan ke level selanjutnya.
    </p>
    <p class="text-justify tex-md font-normal text-slate-700 mb-2">
      Program ini sangat cocok untuk anda yang ingin mahir berbahasa Inggris,
      tetapi anda bingung harus memluai dari mana. Jika anda merasa
      kemampuan Bahasa Inggris anda masih nol, anda bisa memulai dari level
      Beginner, tetapi jika anda merasa bisa berbahasa Inggris dan masih perlu
      banyak belajar, anda bisa mengikuti Pre-Test, sehingga anda tahu
      kemampuan Bahasa Inggris anda sampai di mana, dan bisa langsung
      belajar di level tertentu.
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
<a class="py-2 px-3 border-2 border-green-500 text-lg font-normal text-green-500 rounded-md my-2 hover:bg-green-500 hover:text-white" href="https://wa.me/+6283815678057?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20Program%20English%20Course%20For%20Adult">Tanya Kami</a> 
    </div>
  </div>
</template>

<script>
export default {
  name: "english-course-for-adults",
  data(){
    return{
      priceList:[
        {
          level: "Beginner (1,2,3)",
          price: "Rp 50.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        {
          level: "Intermediate (1,2,3)",
          price: "Rp 55.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        {
          level: "High Intermediate (1,2,3)",
          price: "Rp 60.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        {
          level: "Advanced (1,2,3)",
          price: "Rp 70.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        
      ]
    }
  },
  head () {
    return {
        title: 'Kursus Bahasa Inggris',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Kursus Bahasa Inggris di The Bright Karawang'
          }
        ]
    }
},
};
</script>

<style>
</style>