<template>
  <div class="flex flex-col w-screen h-screen bg-gray-100">
    <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">
      Kategori Artikel
    </h1>

    <div class="flex flex-col my-4 gap-4">
      <NuxtLink class="flex flex-row text-sm p-1 border-2 border-sky-500  rounded-md text-sky-500 hover:bg-sky-500 hover:text-white w-36 text-center justify-center" to="/admin/articles">Kembali</NuxtLink>

      <div class="flex flex-col gap-2">
        <h3 :class="[show, color]" class=" p-2 text-white rounded-md">{{ message }}</h3>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="category"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Kategori</label
              >
              <input
                type="text"
                id="category"
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
                v-model="form.category"
                placeholder="Masukkan kategori baru..."
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
      <div class="overflow-y-scroll h-72">
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
              <th class="border border-slate-200 p-2">Kategori</th>
              <th class="border border-slate-200 p-2" colspan="2">Action</th>
            </tr>
          </thead>
          <tbody class="bg-white hover:bg-slate-50 text-base font-normal">
            <tr v-for="(item, index) in categories" :key="item.id">
              <td class="border border-slate-200 p-2">{{ index + 1 }}</td>
              <td class="border border-slate-200 p-2">
                {{ item.category }}
              </td>
              <td class="border border-slate-200 p-2 text-center">
                <button
                  class="
                    p-1
                    bg-yellow-500
                    rounded-md
                    shadow-sm shadow-slate-100
                    hover:bg-yellow-600
                    text-white
                  "
                  @click="sendValue(item.id, item.category)"
                >
                  Ubah
                </button>
              </td>
              <td class="border border-slate-200 p-2 text-center">
                <button
                  class="
                    p-1
                    bg-red-500
                    rounded-md
                    shadow-sm shadow-slate-100
                    hover:bg-red-600
                    text-white
                  "
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
export default {
  layout: "adminDefault",
  data() {
    return {
      categories: [],
      form:{
        id:null,
        category:null
      },
      show: 'hidden',
      message: null,
      color: null,
      buttonState: 'save',
      
    };
  },
  methods: {

    async getCategories() {
      let response = await this.$axios.$get("categories");
      this.categories = response.data;
    },

    sendValue(id,category){
      this.form.category = category;
      this.buttonState = 'update'
      this.form.id = id;
    },

    async update(){

      if(!this.form.category){
            this.color = 'bg-red-500'
            this.message = 'Pertanyaan tidak boleh dikosongkan!'
            this.show = ''

        }else{
          try{
            let response = await this.$axios.$put('category', this.form)
            this.color = 'bg-green-500'
            this.message = 'Berhasil Mengubah Data'
            this.show = ''
            this.form.id = null
            this.form.category = null
            this.buttonState = 'save'
            setTimeout(() => this.message = null, 2000)
            setTimeout(() => this.show = 'hidden', 2000)
            this.getCategories();
          }catch(error){
            this.color = 'bg-red-500'
            this.message = 'Gagal Mengubah Data, silahkan coba lagi'
            this.show = ''
            setTimeout(() => this.message = null, 2000)
            setTimeout(() => this.show = 'hidden', 2000)
            
          }
        }
    },

    cancel(){
      this.form.category = null
      this.buttonState = 'save'
      this.form.id = null
    },

     async store(){
        if(!this.form.category){
            this.color = 'bg-red-500'
            this.message = 'Kategori tidak boleh dikosongkan!'
            this.show = ''

        }else{
            try{
            let response = await this.$axios.$post("category", this.form);
            this.message = 'Berhasil Menambahkan Data'
            this.show = ''
            setTimeout(() => this.message = null, 2000)
            setTimeout(() => this.show = 'hidden', 2000)
            this.color = 'bg-green-500'
            this.form.category = null
            this.getCategories();
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
        title: 'Hapus Kategori?',
        text: "Kategori yang sudah dihapus tidak dapat dikembalikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya'
        }).then((result) => {
        if (result.value) {

            try{
                this.$axios.$delete(`category/${id}`)
                this.$swal(
                'Berhasil!',
                'Berhasil Menghapus Data',
                'success'
                )
                this.getCategories();
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
    this.getCategories();
  },
};
</script>

<style>
</style>