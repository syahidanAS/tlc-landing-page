<template>
  <div class="index-body">
    <HeroSection />
    <OportunitySection />
    <AboutSection />
    <ProgramsSection />
    <TestimonialsSection />
    <AdvertisementSection />
    <ArticleSection />
    <PartnersSection />
    <FaqSection />

  </div>
</template>

<script>
export default {
  auth: false,
  name: "IndexPage",
  methods:{
    async pushVisitor(){
      const payload = await this.$axios.$post('web-visitors')
    },
  },
  mounted(){
    this.pushVisitor();
  }
};
</script>

<style scoped>
.index-body{
  background-image: url('~/assets/images/hero-accent.svg');
  background-repeat: no-repeat;
	background-size: 800px;
	background-position: 100% -4%;
	background-color: #0ea5e9;
}
@media(max-width: 576px){
	.index-body{
		background-position: 50px -50px;
		background-size: 500px;
	}
}

</style>
