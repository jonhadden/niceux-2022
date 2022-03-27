<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Testimonials from '@/components/Testimonials.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <section>
    <Header />
    <RouterView />
    <Testimonials />
    <Footer />
  </section>
</template>

<style lang="scss">
  @import "@/assets/scss/_global.scss";
</style>
