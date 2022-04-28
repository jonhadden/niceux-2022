<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | NiceUX Custom Software User Experience Design & Development` : `NiceUX Custom Software User Experience Design & Development` }}</template>
  </metainfo>
  <a class="skip-to-content-link" href="#main">Skip to content</a>
  <section>
    <Callout />
    <Header />
    <RouterView />
    <Footer />
  </section>
</template>
<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { useMeta } from 'vue-meta'
  import Callout from '@/components/Callout/Callout.vue'
  import Header from '@/components/Header/Header.vue'
  import Footer from '@/components/Footer/Footer.vue'
  
  useMeta({
    title: '',
    htmlAttrs: { lang: 'en', amp: true }
  })
</script>
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