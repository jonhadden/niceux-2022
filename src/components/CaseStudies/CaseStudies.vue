<template>
  <section class="case-studies">
    <section class="container">
      <h2>Work we're proud of</h2>
      <ul>
        <li v-for="project in caseStudies" :key="project.id">
          <img :src="project.acf.list_image.sizes.medium_large  " alt="" />
          <h3>{{ project.title.rendered }}</h3>
          <p>{{ project.acf.lead_in }}</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  props: ['caseStudies'],
  data() {
    return {
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  @import "./_case-studies.scss";
</style>