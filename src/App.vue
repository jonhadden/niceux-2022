<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <a class="skip-to-content-link" href="#main">Skip to content</a>
  <section>
    <Header />
    <RouterView />
    <Footer />
  </section>
</template>

<style lang="scss">
  @import "@/assets/scss/_global.scss";

  .skip-to-content-link {
    background: #fff;
    color: #000;
    font-weight: bold;
    font-size: 20px;
    left: 20px;
    padding: 30px;
    position: absolute;
    transform: translateY(-100%);
    transition: transform 0.3s;
  }

  .skip-to-content-link:focus {
    transform: translateY(0%);
  }
</style>