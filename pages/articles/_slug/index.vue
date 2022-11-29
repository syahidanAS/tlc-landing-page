<template>
  <div class="flex flex-col bg-white container mx-auto lg:px-24 py-14">
    <div id="heading" class="flex flex-col px-24">
      <h1
        class="text-center text-2xl font-bold text-slate-700 mx-auto lg:px-32"
      >
        {{ slug }}
      </h1>
      <h3 class="mb-4 text-xs font-normal text-slate-600 text-center">
        Ditulis oleh : Syahidan Arrizaldy Sidik
      </h3>
      <img
        class="overflow-hidden rounded-lg"
        src="https://rsudkertosono.nganjukkab.go.id/web2/assets/images/2f27d1d5b8f3b564af48ff25bce30cd6.jpg"
        alt="article-image"
      />
    </div>
    <div class="flex flex-col py-4 px-24 mt-4">
      <h1 class="text-lg font-bold text-slate-700">{{ slug }}</h1>
      <h2 class="text-start text-sm font-normal text-slate-600">
        Selasa, 29 November 2022 <span>09.33</span>
      </h2>
    </div>
    <!-- Body Section -->
    <div class="container font-thin px-24 leading-6">
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
        totam exercitationem necessitatibus, nam corporis velit sunt, reiciendis
        facilis nostrum ratione asperiores accusamus in. Itaque mollitia
        possimus iusto corrupti reiciendis laboriosam fugiat, repellat
        blanditiis expedita quisquam voluptates iure. Expedita, itaque?
      </p>
      <br />
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
        totam exercitationem necessitatibus, nam corporis velit sunt, reiciendis
        facilis nostrum ratione asperiores accusamus in. Itaque mollitia
        possimus iusto corrupti reiciendis laboriosam fugiat, repellat
        blanditiis expedita quisquam voluptates iure. Expedita, itaque?
      </p>
      <br />
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
        totam exercitationem necessitatibus, nam corporis velit sunt, reiciendis
        facilis nostrum ratione asperiores accusamus in. Itaque mollitia
        possimus iusto corrupti reiciendis laboriosam fugiat, repellat
        blanditiis expedita quisquam voluptates iure. Expedita, itaque?
      </p>
      <br>
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil facere
        totam exercitationem necessitatibus, nam corporis velit sunt, reiciendis
        facilis nostrum ratione asperiores accusamus in. Itaque mollitia
        possimus iusto corrupti reiciendis laboriosam fugiat, repellat
        blanditiis expedita quisquam voluptates iure. Expedita, itaque?
      </p>
      <br>
      <p class="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta qui unde
        dolore expedita pariatur illo est quibusdam quisquam ex et eos culpa
        delectus ad autem repudiandae fuga natus exercitationem voluptates quia,
        excepturi soluta. Temporibus sit vitae itaque. Vel soluta iste, eligendi
        a ullam tempora ipsam itaque sed ipsum ratione ab voluptates porro
        reiciendis reprehenderit expedita dignissimos ut nesciunt id. Blanditiis
        repellat dicta quia at? Perspiciatis natus, facilis nisi, velit aperiam
        doloribus itaque quod iste dolor reprehenderit fugit eius accusantium
        repellendus!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slug: null,
    };
  },
  created() {
    this.slug = this.$route.params.slug;
  },
};
</script>

<style>
</style>