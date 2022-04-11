<template>
  <section class="case-studies">
    <section class="container">
      <h2>Work we're proud of</h2>
      <ul v-if="caseStudies">
        <li v-for="project in caseStudies" :key="project.id">
          <RouterLink :to="{ name: 'CaseStudy', params: { slug: project.slug }}">
            <img :src="project.acf.list_image.sizes.medium_large" alt="" />
            <h3>{{ project.title.rendered }}</h3>
            <p>{{ project.acf.lead_in }}</p>
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

let caseStudies = ref(null)
const caseStudyFetchUrl = 'https://niceux.com/admin/wp-json/wp/v2/projects';

onMounted(async () => {

  if (!caseStudies.value) {
    caseStudies.value = await axios
        .get(caseStudyFetchUrl)
        .then(response => {
          const featured = response.data.filter(project => project.acf.featured_case_study == true);
          return featured
        })
        .catch(function (error) {
          console.log(error);
        })
  }
})
</script>

<style lang="scss">
  @import "./_case-studies.scss";
</style>