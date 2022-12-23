<template>
    <footer class="relative bg-sky-500 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-2xl font-bold text-white">The Bright Learning Center</h4>
        <h5 class="text-lg mt-0 mb-2 text-white">
          Create Your Brighter Future
        </h5>
        <div class="mt-6 lg:mb-0 mb-6">
            <iframe class="w-80 md:w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5289439773105!2d107.30436861472052!3d-6.325426663655348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6976336b567ac5%3A0x5c67747972bf8334!2sThe%20Bright%20Learning%20Center!5e0!3m2!1sen!2sid!4v1670775078027!5m2!1sen!2sid" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
            <ul class="list-unstyled">
              <li>
                <NuxtLink class="text-white hover:text-gray-100 font-normal block pb-2 text-sm" to="faqs">FAQs</NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-white hover:text-gray-100 font-normal block pb-2 text-sm" to="articles">Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-white hover:text-gray-100 font-normal block pb-2 text-sm" to="/#programs">Program Belajar</NuxtLink>
              </li>
              <li>
                <a class="text-white hover:text-gray-100 font-normal block pb-2 text-sm" :href="registrationLink">Registrasi</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-1/2 px-4">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Hubungi Kami</span>
            <ul class="list-unstyled">
              <li class="text-white text-justify font-normal block pb-2 text-sm mb-4">
                Perumahan mahkota regency jln.Permata, Moh. K. 2 Blok D No.4, Sirnabaya, Telukjambe Timur, Karawang, Jawa Barat 41361
              </li>
              <li>
                <a class="text-white hover:text-gray-200 font-semibold block pb-2 text-xs" href="#">Phone: +62-838-1567-8057</a>
              </li>
              <li>
                <a class="text-white hover:text-gray-200 font-semibold block pb-2 text-xs" href="#">Email: thebright.future2015@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-white font-semibold py-1">
          Copyright © <span id="get-current-year">2022</span>
          <NuxtLink to="#" class="text-white hover:text-gray-300">The Bright</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>
<script>
export default {
	data(){
		return{
		waNumber:process.env.WHATSAPP_NUMBER,
        registrationLink:process.env.REGISTRATION_FORM
	}
	}
};
</script>

<style scoped></style>
>
