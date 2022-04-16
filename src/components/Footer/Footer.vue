<script setup>
  import ContactBand from '@/components/ContactBand/ContactBand.vue'
  import SocialLinks from '@/components/SocialLinks/SocialLinks.vue'
  import Copyright from '@/components/Copyright/Copyright.vue'
</script>

<template>
  <footer class="footer">
    <ContactBand />
    <SocialLinks />
    <Copyright />
  </footer>
</template>

<script>
export default {
  data() {
      return {}
    },
    methods: {
    },
    created() {
    }
}
</script>

<style lang="scss">
  @import "./_footer.scss";
</style>

