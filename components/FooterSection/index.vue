<template>
	
<footer class="p-4 sm:p-6 bg-slate-900 md:px-32 2xl:px-64 ">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
                <img src="~/assets/images/logo-white.png" class="mr-3 h-8" alt="The Bright Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">The Bright</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Links</h2>
                <ul class="text-gray-400">
                    <li class="mb-4">
                        <NuxtLink to="/faqs" class="hover:underline">FAQS</NuxtLink>
                    </li>
                    <li>
                        <a :href="registrationLink" class="hover:underline">Pendaftaran</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                <ul class="text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Hubungi Kami</h2>
                <ul class="text-gray-400">
                    <li class="mb-4">
                        <a :href="`https://wa.me/${waNumber}?text=Halo,%20saya%20ingin%20bertanya...`" class="hover:underline ">+62 838-1567-8057</a>
                    </li>
                    <li>
                        <a href="mailto:thebright.future2015@gmail.com" class="hover:underline">thebright.future2015@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm sm:text-center text-gray-400">© 2022 <a href="/" class="hover:underline">The Bright Learning Center</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.instagram.com/thebright.brightfuture/" class="text-gray-500  hover:text-white">
                <img src="~/assets/images/instagram-white-16.png" alt="">
            </a>
            <a href="https://www.tiktok.com/@thebright_learningcenter?is_from_webapp=1&sender_device=pc" class="text-gray-500  hover:text-white">
                <img src="~/assets/images/tik-tok.png" alt="">
            </a>
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
