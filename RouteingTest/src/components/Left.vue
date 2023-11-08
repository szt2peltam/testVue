<script setup>
import { RouterView } from 'vue-router';
</script>


<template>
    <div class="wrapper">
        <RouterView v-slot="{Component}">
            <transition name="fade" mode="out-in">
                <component :is="Component"/>

                

            </transition>
        </RouterView>
    </div>
</template>


<style scoped>
    .wrapper{
        background-color: rgba(255, 0, 0, 0.544);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


    .fade-enter-from,
    .-fade-leave-to{
        opacity: 0;
    }

    .fade-enter-active,
    .-fade-leave-active{
        transition: opacity 0.5s ease-out;
    }




</style>