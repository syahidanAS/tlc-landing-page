<template>
    <div class="flex flex-col w-screen h-screen bg-gray-100">
      <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">
        User Management
      </h1>
      <h2 class="mx-auto mb-4 font-semibold text-lg text-red-700">Hati-hati dalam mengelola user!</h2>

  
      <div class="flex flex-col my-4 gap-4">
        <div class="flex flex-col gap-2">
          <h3 :class="[show, color]" class=" p-2 text-white rounded-md">{{ message }}</h3>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="fullname"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Nama Lengkap</label
                >
                <input
                  type="text"
                  id="fullname"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-2.5
                  "
                  v-model="form.name"
                  placeholder="Masukkan nama lengkap user..."
                  required
                />
              </div>
              
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-2.5
                  "
                  v-model="form.email"
                  placeholder="Misal: user@thebrightcourse.com"
                  required
                />
              </div>

              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >No. HP</label
                >
                <input
                  type="text"
                  id="phone"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-2.5
                  "
                  v-model="form.phone"
                  placeholder="Masukkan nomor hp..."
                  required
                />
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Password</label
                >
                <input
                  type="password"
                  id="password"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-2.5
                  "
                  v-model="form.password"
                  required
                />
              </div>

              <div>
                <label
                  for="passwordMatch"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Ketikkan Ulang Password</label
                >
                <input
                  type="password"
                  id="passwordMatch"
                  class="
                    bg-gray-50
                    border border-gray-300
                    text-gray-900 text-sm
                    rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block
                    w-full
                    p-2.5
                  "
                  v-model="passwordMatch"
                  required
                />
              </div>



            </div>
            <div class="flex flex-row gap-2">
              <button
              type="cancel"
              class="
                text-white
                bg-red-500
                hover:bg-blurede-600
                focus:ring-4 focus:outline-none focus:ring-red-300
                font-medium
                rounded-lg
                text-sm
                w-full
                sm:w-auto
                p-2
                text-center
                justify-end
              "
              @click="cancel()"
            >
              Batal
            </button>
  
            <button
              class="
                text-white
                bg-blue-500
                hover:bg-blue-600
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                w-full
                sm:w-auto
                p-2
                text-center
                justify-end
              "
              v-if="buttonState == 'save'"
              @click="store()"
            >
              Simpan
            </button>
  
            <button
              class="
                text-white
                bg-yellow-500
                hover:bg-yellow-600
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                w-full
                sm:w-auto
                p-2
                text-center
                justify-end
              "
              v-else
              @click="update()"
            >
              Update
            </button>
            </div>
            </div>
        
        </div>
        <div class="overflow-y-scroll h-80">
          <table class="text-slate-700 w-full">
            <thead
              class="
                bg-gray-200
                font-semibold
                sticky
                top-0
                border border-slate-800
              "
            >
              <tr>
                <th class="border border-slate-200 p-2">No</th>
                <th class="border border-slate-200 p-2">Nama Lengkap</th>
                <th class="border border-slate-200 p-2">Email</th>
                <th class="border border-slate-200 p-2" colspan="1">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white hover:bg-slate-50 text-base font-normal">
              <tr v-for="(item, index) in users" :key="item.id">
                <td class="border border-slate-200 p-2">{{ index + 1 }}</td>
                <td class="border border-slate-200 p-2">
                  {{ item.name }}
                </td>
                <td class="border border-slate-200 p-2">
                  {{ item.email }}
                </td>

                <td class="border border-slate-200 p-2 text-center">
                    <button
                    class="
                      p-1
                      bg-gray-500
                      rounded-md
                      shadow-sm shadow-slate-100
                      hover:bg-gray-600
                      text-white
                    "
                    v-if="(loggedInUser.email == item.email)"
                    disabled
                  >
                    Hapus
                  </button>

                  <button
                    class="
                      p-1
                      bg-red-500
                      rounded-md
                      shadow-sm shadow-slate-100
                      hover:bg-red-600
                      text-white
                    "
                    v-else
                    @click="destroy(item.id)"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  export default {
    layout: "adminDefault",
    data() {
      return {

        users: [],
        passwordMatch: null,
        form:{
          id:null,
          name:null,
          phone:null,
          email:null,
          password:null
        },
        show: 'hidden',
        message: null,
        color: null,
        buttonState: 'save',
        
      };
    },
    computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
    methods: {
      async getUsers() {
        let response = await this.$axios.$get("users");
        this.users = response.data;
      },
  
    //   sendValue(id,question,answer){
    //     this.form.question = question;
    //     this.form.answer = answer;
    //     this.buttonState = 'update'
    //     this.form.id = id;
    //   },
  
  
    //   cancel(){
    //     this.form.answer = null
    //     this.form.question = null
    //     this.buttonState = 'save'
    //     this.form.id = null
    //   },
  
       async store(){
          if(!this.form.name){
              this.color = 'bg-red-500'
              this.message = 'Nama tidak boleh dikosongkan!'
              this.show = ''
  
          }else if(!this.form.email){
              this.color = 'bg-red-500'
              this.message = 'Email tidak boleh dikosongkan!'
              this.show = ''
              setTimeout(() => this.message = null, 2000)
              setTimeout(() => this.show = 'hidden', 2000)
          }else if(!this.form.phone){
              this.color = 'bg-red-500'
              this.message = 'No.HP tidak boleh dikosongkan!'
              this.show = ''
              setTimeout(() => this.message = null, 2000)
              setTimeout(() => this.show = 'hidden', 2000)
          }else if(!this.form.password){
              this.color = 'bg-red-500'
              this.message = 'Password tidak boleh dikosongkan!'
              this.show = ''
              setTimeout(() => this.message = null, 2000)
              setTimeout(() => this.show = 'hidden', 2000)
          }else if(this.form.password != this.passwordMatch){
              this.color = 'bg-red-500'
              this.message = 'Password tidak sesuai'
              this.show = ''
              setTimeout(() => this.message = null, 2000)
              setTimeout(() => this.show = 'hidden', 2000)
          }
          else{
              try{
              let response = await this.$axios.$post("auth/register", this.form);
              this.message = 'Berhasil Menambahkan Data'
              this.show = ''
              setTimeout(() => this.message = null, 2000)
              setTimeout(() => this.show = 'hidden', 2000)
              this.color = 'bg-green-500'
              this.form.question = null
              this.form.answer = null
              this.getUsers();
          }catch(error){
              this.color = 'bg-red-500'
              this.message = 'Maaf terjadi kesalahan'
              this.show = ''
              setTimeout(() => this.message = null, 2000)
              setTimeout(() => this.show = 'hidden', 2000)
          }
          } 
      },
      destroy(id){
          this.$swal({
          title: 'Hapus Pengguna?',
          text: "Ketika pengguna dihapus, seluruh artikel yang dibuat pengguna tersebut akan ikut terhapus",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ya'
          }).then((result) => {
          if (result.value) {
  
              try{
                  this.$axios.$delete(`users/${id}`)
                  this.$swal(
                  'Berhasil!',
                  'Berhasil Menghapus Data',
                  'success'
                  )
                  this.getUsers();
              }catch(err){
                  this.$swal({
                      icon: 'error',
                      title: 'Gagal Menghapus Data!',
                      })
              }
          }
          })
      },
    },
    mounted() {
      this.getUsers();
    },
  };
  </script>
  
  <style>
  </style>