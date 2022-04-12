<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section class="social-links">
        <section class="container">
            <ul>
                <li>
                    <a 
                        href="https://www.linkedin.com/company/niceux/" 
                        alt="Nice U X LinkedIn page"
                        class="linkedin"
                        target="_blank">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a 
                        href="https://www.facebook.com/NiceUX" 
                        alt="Nice U X LinkedIn page"
                        class="facebook"
                        target="_blank">
                        Facebook
                    </a>
                </li>
                <li>
                    <a 
                        href="https://medium.com/@niceux" 
                        alt="Nice U X Medium articles"
                        class="medium"
                        target="_blank">
                        Medium
                    </a>
                </li>
                <li>
                    <a 
                        href="https://github.com/niceux" 
                        alt="Nice U X GitHub repositories"
                        class="github"
                        target="_blank">
                        GitHub
                    </a>
                </li>
                <li>
                    <a 
                        href="https://stackblitz.com/@jonhadden" 
                        alt="Nice U X StackBlitz snippet projects"
                        class="stackblitz"
                        target="_blank">
                        StackBlitz
                    </a>
                </li>
            </ul>
        </section>
    </section>
</template>

<style lang="scss">
  @import "./_social-links.scss";
</style>