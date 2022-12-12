<template>
  <div class="flex flex-col w-screen h-screen bg-gray-100">
    <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">
      Frequently Asked Question
    </h1>
    <div class="flex flex-row mt-4">
      <input
        class="
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
        "
        id="find"
        type="text"
        placeholder="Cari Pertanyaan"
        v-model="inputSearch"
        @input="search()"
      />
      <button
        class="px-6 rounded-md bg-sky-500 text-white hover:bg-sky-600 mx-2"
        @click="search()"
      >
        Cari
      </button>
      <button
        class="px-6 rounded-md bg-red-500 text-white hover:bg-red-600"
        @click="getFaqs();"
      >
        Batal
      </button>
    </div>

    <div class="flex flex-col my-4 gap-4">
      <div class="flex flex-col gap-2">
        <h3 :class="[show, color]" class=" p-2 text-white rounded-md">{{ message }}</h3>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Pertanyaan</label
              >
              <input
                type="text"
                id="question"
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
                v-model="form.question"
                placeholder="Masukkan pertanyaan..."
                required
              />
            </div>
            <div>
              <label
                for="website"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Jawaban</label
              >
              <input
                type="text"
                id="answer"
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
                v-model="form.answer"
                placeholder="Masukkan jawaban..."
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
              <th class="border border-slate-200 p-2">Pertanyaan</th>
              <th class="border border-slate-200 p-2">Jawaban</th>
              <th class="border border-slate-200 p-2" colspan="2">Action</th>
            </tr>
          </thead>
          <tbody class="bg-white hover:bg-slate-50 text-base font-normal">
            <tr v-for="(item, index) in faqs" :key="item.id">
              <td class="border border-slate-200 p-2">{{ index + 1 }}</td>
              <td class="border border-slate-200 p-2">
                {{ item.question }}
              </td>
              <td class="border border-slate-200 p-2">
                {{ item.answer }}
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
                  @click="sendValue(item.id, item.question, item.answer)"
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
      inputSearch: null,
      faqs: [],
      form:{
        id:null,
        question:null,
        answer:null
      },
      show: 'hidden',
      message: null,
      color: null,
      buttonState: 'save',
      
    };
  },
  methods: {
    async search() {
      let response = await this.$axios.$post('faqs/search',{
        questionOrAnswer: this.inputSearch
      })
      if(response.data.length == 0){
        this.data = null
      }else{
        this.faqs = response.data;
      }
    },
    async getFaqs() {
      let response = await this.$axios.$get("faqs");
      this.faqs = response.data;
    },

    sendValue(id,question,answer){
      this.form.question = question;
      this.form.answer = answer;
      this.buttonState = 'update'
      this.form.id = id;
    },

    async update(){

      if(!this.form.question){
            this.color = 'bg-red-500'
            this.message = 'Pertanyaan tidak boleh dikosongkan!'
            this.show = ''

        }else if(!this.form.answer){
            this.color = 'bg-red-500'
            this.message = 'Jawaban tidak boleh dikosongkan!'
            this.show = ''
            setTimeout(() => this.message = null, 2000)
            setTimeout(() => this.show = 'hidden', 2000)
        }else{
          try{
            let response = await this.$axios.$put('faqs', this.form)
            this.color = 'bg-green-500'
            this.message = 'Berhasil Mengubah Data'
            this.show = ''
            this.form.id = null
            this.form.question = null
            this.form.answer = null
            this.buttonState = 'save'
            setTimeout(() => this.message = null, 2000)
            setTimeout(() => this.show = 'hidden', 2000)
            this.getFaqs();
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
      this.form.answer = null
      this.form.question = null
      this.buttonState = 'save'
      this.form.id = null
    },

     async store(){
        if(!this.form.question){
            this.color = 'bg-red-500'
            this.message = 'Pertanyaan tidak boleh dikosongkan!'
            this.show = ''

        }else if(!this.form.answer){
            this.color = 'bg-red-500'
            this.message = 'Jawaban tidak boleh dikosongkan!'
            this.show = ''
            setTimeout(() => this.message = null, 2000)
            setTimeout(() => this.show = 'hidden', 2000)
        }else{
            try{
            let response = await this.$axios.$post("faqs", this.form);
            this.message = 'Berhasil Menambahkan Data'
            this.show = ''
            setTimeout(() => this.message = null, 2000)
            setTimeout(() => this.show = 'hidden', 2000)
            this.color = 'bg-green-500'
            this.form.question = null
            this.form.answer = null
            this.getFaqs();
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
        title: 'Hapus Pertanyaan',
        text: "Pertanyaan yang sudah dihapus tidak dapat dikembalikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya'
        }).then((result) => {
        if (result.value) {

            try{
                this.$axios.$delete(`faqs/${id}`)
                this.$swal(
                'Berhasil!',
                'Berhasil Menghapus Data',
                'success'
                )
                this.getFaqs();
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
    this.getFaqs();
  },
};
</script>

<style>
</style>