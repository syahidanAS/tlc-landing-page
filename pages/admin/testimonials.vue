<template>
  <div class="flex flex-col w-screen h-screen bg-gray-100 overflow-y-scroll">
    <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">
      Kelola Testimoni
    </h1>
    <h2 class="mx-auto mb-4 text-sm font-normal text-slate-600">Agar tampilan website terlihat lebih nyaman, testimoni wajib diisi minimal 3 item</h2>

    <div class="flex flex-col my-4 gap-4">
      <div class="flex flex-col gap-2">
        <h3 :class="[show, color]" class=" p-2 text-white rounded-md">{{ message }}</h3>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Nama Customer/Partner</label
              >
              <input
                type="text"
                id="name"
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
                placeholder="Masukkan nama..."
                required
              />
            </div>
            <div>
              <label
                for="testimonial"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Testimoni</label
              >
              <input
                type="text"
                id="testimonial"
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
                v-model="form.testimonial"
                placeholder="Masukkan testimoni..."
                required
              />
            </div>

            <div>
              <label
                for="image"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Foto Customer/Partner</label
              >
              <input
                type="file"
                id="image"
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
                @change="onFileChange"
                required
              />
            </div>

            <div class="flex flex-col">
          <label class="font-semibold text-slate-700" for="">Image Preview</label>
        <div class="flex flex-col w-40 border border-slate-700 p-2 h-40 overflow-auto justify-center" id="preview">
            <img class="rounded-md" v-if="url" :src="url" />
            <h2 class="text-slate-400 font-semibold text-lg text-center " v-else>640 x 640</h2>
        </div>
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
              <th class="border border-slate-200 p-2">Nama Cust</th>
              <th class="border border-slate-200 p-2">Testimoni Cust</th>
              <th class="border border-slate-200 p-2">Foto Cust</th>
              <th class="border border-slate-200 p-2" colspan="2">Action</th>
            </tr>
          </thead>
          <tbody class="bg-white hover:bg-slate-50 text-base font-normal">
            <tr v-for="(item, index) in testimonials" :key="item.id">
              <td class="border border-slate-200 p-2">{{ index + 1 }}</td>
              <td class="border border-slate-200 p-2">
                {{ item.name }}
              </td>
              <td class="border border-slate-200 p-2">
                {{ item.testimonial }}
              </td>
              <td class="border border-slate-200 p-2">
                <img class="w-20" :src="item.image_url" alt="">
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
                  @click="sendValue(item.id, item.name, item.testimonial, item.image_url)"
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
    layout:'adminDefault',
    data(){
      return{
        inputSearch: null,
        buttonState: 'save',
        show: 'hidden',
        color: null,
        message: null,
        url: null,
        testimonials:[],
        image_uri:null,
        form:{
          id: null,
          name:null,
          testimonial:null,
        }
      }
    },
    methods:{
      onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.image_uri = file;
    },

    sendValue(id,name,testimonial,image_url){
      this.form.name = name;
      this.form.testimonial = testimonial;
      this.buttonState = 'update',
      this.url = image_url
      this.form.id = id;
    },

    async getTestimonials() {
      let response = await this.$axios.$get("testimonials");
      this.testimonials = response.data;
    },
    async store(){
      
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("testimonial", this.form.testimonial);
      formData.append("image_uri", this.image_uri);

      if(!this.form.name){
        this.$swal({
          icon: 'warning',
          title: 'Nama tidak boleh kosong!',
        })
      }else if(!this.form.testimonial){
        this.$swal({
          icon: 'warning',
          title: 'Testimoni tidak boleh kosong',
        })
      }else if(!this.image_uri){
        this.$swal({
          icon: 'warning',
          title: 'Gambar tidak boleh kosong!',
        })
      }else{
        let response = await this.$axios.$post('testimonials', formData,{
        'content-type': 'multipart/form-data'
      }).then(()=>{
        this.$swal(
            'Berhasil!',
            'Artikel Berhasil disimpan',
            'success'
            )

            this.form.name = null
            this.form.testimonial = null
            this.image_uri = null
            this.url = null

            this.getTestimonials();
      })
      
      }    
    },
    async update(){
      let formData = new FormData();
      formData.append("id", this.form.id);
      formData.append("name", this.form.name);
      formData.append("testimonial", this.form.testimonial);
      formData.append("image_uri", this.image_uri);
      

      if(!this.form.name){
        this.$swal({
          icon: 'warning',
          title: 'Judul tidak boleh kosong!',
        })
      }else if(!this.form.testimonial){
        this.$swal({
          icon: 'warning',
          title: 'Konten tidak boleh kosong!',
        })
      }else{
        let response = await this.$axios.$post(`update/testimonial`, formData,{
        'content-type': 'multipart/form-data'
      }).then(()=>{
        this.$swal(
            'Berhasil!',
            'Artikel Berhasil diubah',
            'success'
            )
          this.getTestimonials();
          this.form.id = null
          this.form.name = null
          this.form.testimonial = null
          this.image_uri = null
          this.url = null
          this.buttonState = 'save'
      })
      }

    },

    cancel(){
      this.form.name = null
      this.form.testimonial = null
      this.buttonState = 'save'
      this.form.id = null
      this.url = null
      this.image_uri = null
    },

    destroy(id){
        this.$swal({
        title: 'Hapus Testimoni?',
        text: "Testimoni yang sudah dihapus tidak dapat dikembalikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya'
        }).then((result) => {
        if (result.value) {

            try{
                this.$axios.$delete(`testimonials/${id}`)
                this.$swal(
                'Berhasil!',
                'Berhasil Menghapus Data',
                'success'
                )
                this.getTestimonials();
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

    mounted(){
      this.getTestimonials();
    }
}
</script>

<style>

</style>