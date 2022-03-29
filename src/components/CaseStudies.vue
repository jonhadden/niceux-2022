<template>
  <section class="case-studies">
    <section class="container">
      <h1>Our Work</h1>
      <ul>
        <li v-for="project in caseStudies" :key="project.id">
          {{ project.title.rendered }}
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
  }
}
</script>