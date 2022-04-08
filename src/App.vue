<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <section>
    <Header />
    <RouterView />
    <Footer />
  </section>
</template>

<style lang="scss">
  @import "@/assets/scss/_global.scss";
</style>
