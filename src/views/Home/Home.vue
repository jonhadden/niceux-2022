<script setup>
  import Hero from '@/components/Hero/Hero.vue'
  import CaseStudies from '@/components/CaseStudies/CaseStudies.vue'
  import Clients from '@/components/Clients/Clients.vue'
  import Testimonials from '@/components/Testimonials/Testimonials.vue'
  import Promo from '@/components/Promo/Promo.vue'
</script>

<template>
  <main class="home">
    <Hero />
    <CaseStudies />
    <Clients />
    <Promo />
  </main>
</template>

<style lang="scss">
  @import "./_home.scss";
</style>

