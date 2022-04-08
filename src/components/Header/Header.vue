<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <section>
        <!-- <div class="promo">
            We stand behind Ukraine
        </div> -->
        <header class="main-header">
            <div class="container">
                <span class="logo">
                    <img src="@/assets/images/logo-niceux.svg" alt="" />
                    <span>NiceUX</span>
                </span>
                <!-- <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav> -->
            </div>
        </header>
    </section>
</template>

<style lang="scss">
  @import "./_header.scss";
</style>