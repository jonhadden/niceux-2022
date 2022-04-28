<script setup>
    import { ref } from 'vue'
    import { RouterLink } from 'vue-router'
    import SocialLinks from '@/components/SocialLinks/SocialLinks.vue' 

    const showMenu = ref(false)
    function toggleMenu(target) {
        if(target === "logo") {
            showMenu.value = false;    
        } else {
            showMenu.value = showMenu.value ? false : true
        }        
    }
</script>
<template>
    <header class="main-header">
        <div class="container">
            <RouterLink 
                :to="{ path: '/' }"
                class="logo"
                @click="toggleMenu('logo')">
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
                        <li><RouterLink :to="{ path: '/' }" @click="toggleMenu">Home</RouterLink></li>
                        <li><RouterLink :to="{ path: '/about' }" @click="toggleMenu">About</RouterLink></li>
                        <li class="divider"><RouterLink :to="{ path: '/articles' }" @click="toggleMenu">Articles</RouterLink></li>
                        <li class="divider"><a href="mailto:info@niceux.com?subject=I have some questions about NiceUX">Send email to info@niceux.com</a></li>
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