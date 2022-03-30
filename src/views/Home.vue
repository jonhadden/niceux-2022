<script setup>
  import Hero from '@/components/Hero/Hero.vue'
  import Clients from '@/components/Clients/Clients.vue'
  import CaseStudies from '@/components/CaseStudies.vue'
</script>

<template>
  <main class="home">
    <Hero />
    <Clients />
    <CaseStudies :caseStudies="caseStudies" />
    <Articles :articles="articles" />
  </main>
</template>

<script>
export default {
  data() {
      return {
        articles: [],
        caseStudies: []
      }
    },
    methods: {
    },
    created() {
      let featureUrl = 'https://niceux.com/admin/wp-json/wp/v2/projects';
      fetch(featureUrl)
        .then(response => response.json())
        .then(response => {
          this.caseStudies = response;
        })

      let articlesUrl = 'https://niceux.com/admin/wp-json/wp/v2/posts?per_page=4';
      fetch(articlesUrl)
        .then(response => response.json())
        .then(response => {
            this.articles = response;
        });
    }
}
</script>

