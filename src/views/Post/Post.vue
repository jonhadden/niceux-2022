<template>
  <section class="post">
    <article v-if="post">
      <header>
        <div class="post-hero-image">
          <img 
            v-if="post.acf.hero-image" 
            :src="post.acf.feature-image.sizes.large"
            alt="" />
          <img 
            v-else 
            src="https://picsum.photos/seed/picsum/2000/800" 
            alt="" />

        </div>
        <section class="container">
          <h1 v-html="post.title.rendered"></h1>
          <h2 v-html="post.excerpt.rendered"></h2>
        </section>
      </header>
      <main class="container">
        <section v-html="post.content.rendered"></section>
      </main><!-- End .container -->
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
  let post = ref(null)
  const postFetchUrl = `https://niceux.com/admin/wp-json/wp/v2/posts?slug=${route.params.slug}`;

  onBeforeMount(async () => {

    window.scrollTo(0,0);

    if (!post.value) {
      post.value = await axios
          .get(postFetchUrl)
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
  @import "./_post.scss";
</style>