<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
        <RouterView v-slot="{Component}">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>

                

            </transition>
        </RouterView>
</template>

<style>
html, body { margin: 0; padding: 0; }
* { box-sizing: border-box; }


.fade-enter-from,
    .-fade-leave-to{
        opacity: 0;
    }

    .fade-enter-active,
    .-fade-leave-active{
        transition: opacity 3s ease-out;
    }



</style>
