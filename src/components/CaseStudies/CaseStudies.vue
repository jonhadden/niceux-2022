<template>
  <section class="case-studies">
    <ul v-if="caseStudies">
      <li v-for="project in caseStudies" :key="project.id">
        <RouterLink :to="{ name: 'CaseStudy', params: { slug: project.slug }}">
          <div class="container">
            <p class="case-study-badge">Case Study</p>
            <h2>{{ project.title.rendered }}</h2>
            <h3>{{ project.acf.lead_in }}</h3>
            <div class="imagery">
              <img :src="project.acf.list_image.sizes.medium_large" alt="" />
              <img :src="project.acf.list_image_background.sizes.medium_large" alt="" />
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
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