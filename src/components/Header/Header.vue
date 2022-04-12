<script setup>
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router'
    import SocialLinks from '@/components/SocialLinks/SocialLinks.vue' 

    const showMenu = ref(false)

    function toggleMenu() {
        showMenu.value = showMenu.value ? false : true
    }
</script>

<template>
    <header class="main-header">
        <div class="container">
            <RouterLink 
                :to="{ path: '/' }"
                class="logo">
                <img src="@/assets/images/logo-niceux.svg" alt="Nice U X Logo" />
                <span>NiceUX</span>
            </RouterLink>
            <button 
                class="hamburger hamburger--spin"
                :class="{ 'is-active': showMenu }"
                @click="toggleMenu">
                <div class="hamburger-box">
                <div class="hamburger-inner"></div>
                </div>
            </button>
            <nav 
                class="fade-in-section"
                :class="{ 'is-visible': showMenu }">
                <div class="container">
                    <ul class="menu-items">
                        <li><a href="/">Home</a></li>
                        <li><a href="mailto:info@niceux.com?subject=I have some questions about NiceUX">Contact</a></li>
                    </ul>
                </div>
                <SocialLinks />    
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
  @import "./_header.scss";
</style>