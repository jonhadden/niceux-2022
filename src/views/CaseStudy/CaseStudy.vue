<template>
  <section class="case-study">
    <article v-if="caseStudy">
      <header>
        <h1>{{ this.caseStudy.title.rendered }}</h1>
      </header>
      <section>
        <section class="container"></section>
      </section>
    </article>
    <article v-else>
      Loading...
    </article>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
let caseStudy = ref(null)
const caseStudyFetchUrl = `https://niceux.com/admin/wp-json/wp/v2/projects?slug=${route.params.slug}`;

onBeforeMount(async () => {

  if (!caseStudy.value) {
    caseStudy.value = await axios
        .get(caseStudyFetchUrl)
        .then(response => {
          console.log(response.data[0]);
          return response.data[0]
        })
        .catch(function (error) {
          console.log(error);
        })
  }
})
</script>


<style lang="scss">
  @import "./_case-study.scss";
</style>