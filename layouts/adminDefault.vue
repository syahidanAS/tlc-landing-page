<template>
  <div>
    <nav class="bg-slate-700 py-2 md:py-0 border-gray-200 shadow-lg shadow-white  sm:px-4">
      <div
        class="container flex flex-wrap justify-between"
      >
        <div
          class="flex items-center cursor-pointer"
          v-on:click="hidden = !hidden"
        >
          <img src="~/assets/images/logo-blue.png" class="h-6 mr-3 sm:h-9" />
          <span
            class="
              self-center
              text-xl
              font-semibold
              whitespace-nowrap
              text-sky-500
            "
            >The Bright</span
          >
          <img
            class="w-6 mx-10"
            src="~/assets/images/menu-white-64.png"
            alt="menu"
          />
        </div>
        <div class=" w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="
              flex flex-row
              p-4
              mt-4
        
              border border-gray-100
              rounded-lg
              bg-gray-slate
           
              md:space-x-8
              md:mt-0
              md:text-normal
              md:font-normal
              md:border-0

            "
          >
          
            <li v-on:click="(isExpand = !isExpand)">
              <div
                class="
                  flex
                  flex-row
                  justify-end
                  gap-2
                  py-2
                  pl-3
                  pr-4
                  text-white
                  hover:bg-slate-800
                  rounded-md
                  cursor-pointer
                "
                aria-current="page"
                >
                <img class="w-6" src="~/assets/images/user.svg" alt=""/>
                
               <div class="mt-2">
                {{ loggedInUser.name }}
               </div>
                </div>

                <div class="fixed p-4 z-90 w-64 bg-gray-100 shadow-md shadow-slate-300 rounded-b-md " v-if="!isExpand">
                <div class="flex flex-row gap-2 cursor-pointer hover:bg-slate-300 p-2 rounded-md" @click="logout()">
                  <img class="w-5" src="~/assets/images/logout.svg" alt="">
                  <h3 class="text-slate-700 font-normal">Logout</h3>
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
     
    </nav>


    <div class="flex flex-row">
      <aside class="w-64" aria-label="Sidebar" v-if="hidden">
        <div
          class="overflow-y-auto py-4 px-3 bg-slate-700 shadow-md shadow-slate-300 h-screen border-slate-400"
        >
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="
                flex
                  items-center
                  p-2
                  text-base
                  text-white
                  rounded-lg
                  font-normal
                  hover:bg-slate-800
                "
              >
                <span class="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                flex
                  items-center
                  p-2
                  text-base
                  text-white
                  rounded-lg
                  font-normal
                  hover:bg-slate-800
                "
              >
                <span class="ml-3">Artikel</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                flex
                  items-center
                  p-2
                  text-base
                  text-white
                  rounded-lg
                  font-normal
                  hover:bg-slate-800
                "
              >
                <span class="ml-3">FAQs</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                flex
                  items-center
                  p-2
                  text-base
                  text-white
                  rounded-lg
                  font-normal
                  hover:bg-slate-800
                "
              >
                <span class="ml-3">Testimoni</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  text-base
                  text-white
                  rounded-lg
                  font-normal
                  hover:bg-slate-800
                "
              >
                <span class="ml-3">Banner</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <Nuxt class="py-6 px-12" />
    </div>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";

export default {
  name: "adminDefault",
  data() {
    return {
      hidden: true,
      isExpand: true,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods:{
    async logout(){
      await this.$auth.logout();
    }
  }
};
</script>
  
  <style></style>
  