<script setup>
  import Hero from '@/components/Hero/Hero.vue'
  import Clients from '@/components/Clients/Clients.vue'
  import Promo from '@/components/Promo/Promo.vue'
</script>

<template>
  <main class="home">
    <Hero />
    <Clients />
    <Promo />
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
      const accessToken = "2f84054a6b00e2844394757e7ac77e8f032f6a22e67c10fae84cc92e3a8b63a5a";
      let featureUrl = `'https://api.medium.com/v1/me?accessToken=${accessToken}'`;
      fetch(featureUrl)
        .then(response => {
          console.log("!!!!!", response);
        })
      
      
      // let featureUrl = 'https://niceux.com/admin/wp-json/wp/v2/projects';
      // fetch(featureUrl)
      //   .then(response => response.json())
      //   .then(response => {
      //     this.caseStudies = response;
      //   })

      // let articlesUrl = 'https://niceux.com/admin/wp-json/wp/v2/posts?per_page=4';
      // fetch(articlesUrl)
      //   .then(response => response.json())
      //   .then(response => {
      //       this.articles = response;
      //   });
    }
}
</script>

