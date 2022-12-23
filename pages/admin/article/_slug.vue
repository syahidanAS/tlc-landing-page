<template>
  <div class="flex flex-col w-screen h-screen bg-gray-100">
    <h1 class="mx-auto mb-4 text-2xl font-bold text-slate-700">
      Buat/Ubah Artikel
    </h1>
    
    <div class="flex flex-row justify-between">
        <NuxtLink
      class="
        flex flex-row
        gap-2
        p-1
        border-2
        border-sky-500
        text-sky-500
        rounded-md
        w-20
        text-sm
        hover:bg-sky-500
        hover:text-white
      "
      to="/admin/articles"
    >
      <h3 class="font-bold mx-auto">Kembali</h3>
    </NuxtLink>


    <div class="flex flex-row gap-2"  v-if="!slug">
        <button
        title="Publish artikel secara langsung"
      class="
        flex flex-row
        gap-2
        p-1
        bg-orange-500
        text-white
        rounded-md
        w-20
        text-sm
        hover:bg-orange-600
      "
     
      @click="publish()"
    >
      <h3 class="font-bold mx-auto">Publish</h3>
    </button>

    <button
        title="Simpan artikel menjadi draft"
      class="
        flex flex-row
        gap-2
        p-1
        bg-green-500
        text-white
        rounded-md
        w-20
        text-sm
        hover:bg-green-600
      "
      @click="save()"
    >
      <h3 class="font-bold mx-auto">Simpan</h3>
    </button>
    </div>


    <div class="flex flex-row gap-2"  v-else>
        <button
        title="Publish artikel secara langsung"
      class="
        flex flex-row
        gap-2
        p-1
        bg-sky-500
        text-white
        rounded-md
        w-20
        text-sm
        hover:bg-sky-600
      "
     
      @click="update()"
    >
      <h3 class="font-bold mx-auto">Update</h3>
    </button>
    </div>



    </div>

    <div class="flex flex-col my-5 pr-20 gap-4 overflow-y-scroll bg-white p-5 rounded-md">
        <div class="flex flex-col">
            <label class="font-semibold text-slate-700" for="title">Judul Artikel</label>
            <input class="p-2 rounded-md shadow-md shadow-slate-200 border border-slate-700" type="text" id="title" placeholder="Judul Artikel" v-model="payload.title">
        </div>

       <div class="flex flex-col w-44">
        <label class="font-semibold text-slate-700" for="category">Pilih Kategori</label>
        <select class="p-2 rounded-md shadow-md shadow-slate-200 cursor-pointer border border-slate-700" id="category" name="category" v-model="selectedValue">
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.category }}</option>
        </select>
       </div>

      <div class="flex flex-col">
        <label class="font-semibold text-slate-700" for="content">Konten</label>
        <no-ssr  placeholder="Loading Your Editor..." id="content">
        <div class="bg-white" >
        <vue-editor id="content" placeholder="Apa yang anda pikirkan?" v-model="payload.body"></vue-editor>
      </div>
    </no-ssr>
      </div>


      <div class="flex flex-col">
            <label class="font-semibold text-slate-700" for="title">Foto</label>
            <input name="image_uri" class="p-2 rounded-md shadow-md shadow-slate-200 bg-white cursor-pointer w-72 border border-slate-700" type="file" id="title" placeholder="Judul Artikel" @change="onFileChange" accept="image/jpeg">
        </div>
        
        <div class="flex flex-col">
          <label class="font-semibold text-slate-700" for="">Image Preview</label>
        <div class="w-64 border border-slate-700 p-2 h-64 overflow-auto" id="preview">
            <img class="rounded-md" v-if="url" :src="url" />
        </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: "adminDefault",
  middleware: 'auth',

  data(){
    return{
        content:null,
        categories: [],
        image_uri:null,
        url: null,
        selectedValue: 1,
        payload:{
            id: null,
            title: null,
            body: null,
            published_at: '',
            category_id: null,
            image_url: null,
        },
        slug : this.$route.params.slug,
    }
  },
  methods:{

    async getBySlug(){
      let response = await this.$axios.$get(`articles/${this.$route.params.slug}`)

      this.payload.id = response.data[0].id
      this.payload.title = response.data[0].title
      this.payload.body = response.data[0].body
      this.selectedValue = response.data[0].category_id
      this.payload.published_at = response.data[0].published_at
      this.url = response.data[0].image_url
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.image_uri = file;
    },
    async update(){
      let formData = new FormData();
      formData.append("title", this.payload.title);
      formData.append("body", this.payload.body);
      formData.append("image_uri", this.image_uri);
      formData.append("published_at", this.payload.published_at);
      formData.append("category_id", this.selectedValue);
      

      if(!this.payload.title){
        this.$swal({
          icon: 'warning',
          title: 'Judul tidak boleh kosong!',
        })
      }else if(!this.payload.body){
        this.$swal({
          icon: 'warning',
          title: 'Konten tidak boleh kosong!',
        })
      }else if(!this.selectedValue){
        this.$swal({
          icon: 'warning',
          title: 'Kategori tidak boleh kosong!',
        })
      }else{
        let response = await this.$axios.$post(`articles?id=${this.payload.id}`, formData,{
        'content-type': 'multipart/form-data'
      }).then(()=>{
        this.$swal(
            'Berhasil!',
            'Artikel Berhasil diubah',
            'success'
            )
            window.location = process.env.SITE_URL+'admin/articles';
      })
      }

    },
    async save(){
      
      let formData = new FormData();
      formData.append("title", this.payload.title);
      formData.append("body", this.payload.body);
      formData.append("image_uri", this.image_uri);
      formData.append("published_at", this.payload.published_at);
      formData.append("category_id", this.selectedValue);

      if(!this.payload.title){
        this.$swal({
          icon: 'warning',
          title: 'Judul tidak boleh kosong!',
        })
      }else if(!this.payload.body){
        this.$swal({
          icon: 'warning',
          title: 'Konten tidak boleh kosong!',
        })
      }else if(!this.image_uri){
        this.$swal({
          icon: 'warning',
          title: 'Artikel harus memiliki gambar!',
        })
      }else if(!this.selectedValue){
        this.$swal({
          icon: 'warning',
          title: 'Kategori tidak boleh kosong!',
        })
      }else{
        let response = await this.$axios.$post('article', formData,{
        'content-type': 'multipart/form-data'
      }).then(()=>{
        this.$swal(
            'Berhasil!',
            'Artikel Berhasil disimpan',
            'success'
            )
            window.location = process.env.SITE_URL+'admin/articles';
      })
      }    
    },

    async publish(){
      const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
        this.payload.published_at = dateTime

        this.$swal.fire({
            title: 'Publish Artikel?',
            text: "Artikel yang sudah publish akan langsung ditayangkan",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, publish'
          }).then((result) => {
            if (result.value) {
              this.save();
            }
          })

        

    },
    async getCategories(){
      let response = await this.$axios.$get('categories');
      this.categories = response.data
    }
  },
  mounted(){
    this.getCategories();
    this.getBySlug();
  }
};
</script>

<style>
</style>