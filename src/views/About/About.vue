<template>
  <section class="about">
    <WorldsBest />
    <Testimonials />
  </section>
</template>
<script setup>
  import { useMeta } from 'vue-meta'

  import WorldsBest from '@/components/WorldsBest/WorldsBest.vue'
  import Testimonials from '@/components/Testimonials/Testimonials.vue'

  useMeta({
    title: 'About Us',
    htmlAttrs: { lang: 'en', amp: true }
  })
</script>
<style lang="scss">
  @import "./_about.scss";
</style>
