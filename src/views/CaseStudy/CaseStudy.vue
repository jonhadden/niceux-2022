<template>
  <section class="case-study">
    <article v-if="caseStudy">
      <header>
        <section class="container">
          <h1><strong>Case Study:</strong> {{ caseStudy.title.rendered }}</h1>
          <h2>{{ caseStudy.acf.lead_in }}</h2>
        </section>
      </header>
      <section class="container">

        <section class="meta">
          <dl v-if="caseStudy.acf.role || caseStudy.acf.timeline">
            <dt v-if="caseStudy.acf.role">Role:</dt>
            <dd v-if="caseStudy.acf.role">{{ caseStudy.acf.role }}</dd>
            <dt v-if="caseStudy.acf.timeline">Timeline:</dt>
            <dd v-if="caseStudy.acf.timeline">{{ caseStudy.acf.timeline }}</dd>
          </dl>
          <dl v-if="caseStudy.acf.team || caseStudy.acf.partner">
            <dt v-if="caseStudy.acf.team">Team:</dt>
            <dd v-if="caseStudy.acf.team">{{ caseStudy.acf.team }}</dd>
            <dt v-if="caseStudy.acf.partner">Partner Org:</dt>
            <dd v-if="caseStudy.acf.partner">{{ caseStudy.acf.partner }}</dd>
          </dl>
          <dl v-if="caseStudy.acf.tools">
            <dt>Tools:</dt>
            <dd>{{ caseStudy.acf.tools }}</dd>
          </dl>
        </section>

        <section v-html="caseStudy.content.rendered"></section>

      </section><!-- End .container -->
    </article>
    <article v-else>
      <Loading />
    </article>
  </section>
</template>
<script setup>
  import { ref, onBeforeMount } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import Loading from '@/components/Loading/Loading.vue'

  const route = useRoute()
  let caseStudy = ref(null)
  const caseStudyFetchUrl = `https://niceux.com/admin/wp-json/wp/v2/projects?slug=${route.params.slug}`;

  onBeforeMount(async () => {

    window.scrollTo(0,0);

    if (!caseStudy.value) {
      caseStudy.value = await axios
          .get(caseStudyFetchUrl)
          .then(response => {
            const responseObj = response.data[0];
            return responseObj;
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