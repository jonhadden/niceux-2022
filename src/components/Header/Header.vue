<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section>
        <header class="main-header">
            <div class="container">

                <span class="logo">
                    <img src="@/assets/images/logo-niceux.svg" alt="" />
                    <span>NiceUX</span>
                </span>

                <ul class="social-links">
                    <li>
                        <a 
                            href="https://medium.com/@niceux" 
                            alt="Nice U X Medium articles"
                            target="_blank">
                            Medium
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/niceux" 
                            alt="Nice U X GitHub repositories"
                            target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://stackblitz.com/@jonhadden" 
                            alt="Nice U X StackBlitz snippet projects"
                            target="_blank">
                            StackBlitz
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/company/niceux/" 
                            alt="Nice U X LinkedIn page"
                            target="_blank">
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    </section>
</template>

<style lang="scss">
  @import "./_header.scss";
</style>