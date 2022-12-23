<template>
  <div class="container mx-auto px-5 md:px-24 py-2 pb-32 md:py-14">
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
        Program English For Specific Purposes
    </h1>

    <p class="text-justify tex-md font-normal text-slate-700 mb-2">
      ESP (English for Specific Purposes) adalah
      program bahasa Inggris dari The Bright yang
      dirancang untuk mempelajari bahasa Inggris
      dalam bidang tertentu.
    </p>
    <p class="text-justify tex-md font-normal text-slate-700 mb-2">
      Program ini sangat cocok untuk anda yang
      dituntut mampu berinteraksi/berkomunikasi
      menggunakan bahasa Inggris pada bidang
      pekerjaan anda.

    </p>
    <p class="text-justify tex-md font-normal text-slate-700 mb-2">
      Jika pada job desk anda diharuskan
      berkomunikasi dengan orang asing, yuk daftar
      sekarang juga
    </p>

    <h2 class="text-justify tex-md font-normal text-slate-700 mb-2">Kategori ESP</h2>
    <ul >
      <li class="text-justify tex-md font-normal text-slate-700 mb-2 ml-2">1. English For Business</li>
      <li class="text-justify tex-md font-normal text-slate-700 mb-2 ml-2">2. English For Medical</li>
      <li class="text-justify tex-md font-normal text-slate-700 mb-2 ml-2">3. English For Engineering</li>
    </ul>
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
<a class="py-2 px-3 border-2 border-green-500 text-lg font-normal text-green-500 rounded-md my-2 hover:bg-green-500 hover:text-white" :href="`https://wa.me/${waNumber}?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20Program%20English%20For%20Specific%20Purposes`">Tanya Kami</a> 
  </div>
  </div>
</template>

<script>
export default {
  name: "english-for-specific-purposes",
  data(){
    return{
      priceList:[
        {
          level: "IELTS Preparation",
          price: "Rp 100.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        {
          level: "TOEFL Preparation",
          price: "Rp 100.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        {
          level: "English For Business",
          price: "Rp 100.000,- / 1 kali pertemuan",
          registration: "Rp 200.000,-"
        },
        
      ]
    }
  },
  head () {
    return {
        waNumber:process.env.WHATSAPP_NUMBER,
        title: 'Bahasa Inggris Untuk Kebutuhan Khusus',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Pelatiahan dan Kursus Bahasa Inggris untuk perusahaan, bisnis, kesehatan, dan engineering'
          }
        ]
    }
},
};
</script>

<style>
</style>