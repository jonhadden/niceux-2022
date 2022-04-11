<script setup>
    import { ref, onMounted } from 'vue'
    import { RouterLink } from 'vue-router'
    import SocialLinks from '@/components/SocialLinks/SocialLinks.vue' 

    let showMenu = ref(false)

    onMounted(() => {
        
    })
</script>

<template>
    <section>
        <header class="main-header">
            <div class="container">

                <RouterLink 
                    :to="{ path: '/' }"
                    class="logo">
                    <img src="@/assets/images/logo-niceux.png" alt="Nice U X Logo" />
                    <span>NiceUX</span>
                </RouterLink>


                <div 
                    class="hamburger hamburger--spin"
                    :class="{ showMenu: is-active }"
                    @click="showMenu = !showMenu">
                    <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                    </div>
                </div>
                <nav :class="{  showMenu: show-menu }">
                    <ul class="menu-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <SocialLinks />    
                </nav>
            </div>
        </header>
        
    </section>
</template>

<style lang="scss">
  @import "./_header.scss";
</style>