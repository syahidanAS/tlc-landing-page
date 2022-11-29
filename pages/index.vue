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
    <FooterSection />

  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
