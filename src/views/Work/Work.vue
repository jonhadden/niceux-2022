<script setup>
  import Hero from '@/components/Hero/Hero.vue'
  import WorldsBest from '@/components/WorldsBest/WorldsBest.vue'
  import CaseStudies from '@/components/CaseStudies/CaseStudies.vue'
  import Clients from '@/components/Clients/Clients.vue'
  import Promo from '@/components/Promo/Promo.vue'
</script>

<template>
  <main class="work">
    <Hero />
    <WorldsBest />
    <CaseStudies />
    <Clients />
    <Promo />
  </main>
</template>

<style lang="scss">
  @import "./_work.scss";
</style>

