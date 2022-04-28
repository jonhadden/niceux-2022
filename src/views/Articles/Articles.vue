<template>
    <section class="articles">
        <div class="container">
            <header>
                <h1>Articles on Design &amp; Code</h1>
                <h2>While we have the frequent opportunities to lecture at conferences and host workshops, we still like to get our thoughts about product strategy, design and code down on paper.</h2>
            </header>
            <main v-if="articles">
                <article v-for="post in articles" :key="post.id">
                    <RouterLink :to="{ name: 'Post', params: { slug: post.slug }}">
                        <article>
                            <h3 v-html="post.title.rendered"></h3>
                            <p v-html="post.excerpt.rendered"></p>
                        </article>
                    </RouterLink>
                </article>
            </main>
            <main v-else>
                <Loading />
            </main>
        </div>
    </section>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import { useMeta } from 'vue-meta'
  import Loading from '@/components/Loading/Loading.vue'
  import axios from 'axios'

  let articles = ref(null)
  const articlesFetchUrl = 'https://niceux.com/admin/wp-json/wp/v2/posts';

  onMounted(async () => {
    if (!articles.value) {
      articles.value = await axios
          .get(articlesFetchUrl)
          .then(response => {
            console.log(response.data);
            return response.data
          })
          .catch(function (error) {
            console.log(error);
          })
    }
  })

  useMeta({
    title: 'Articles on Design & Code',
    htmlAttrs: { lang: 'en', amp: true }
  })

</script>
<style lang="scss">
  @import "./_articles.scss";
</style>