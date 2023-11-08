<script setup>
import Left from '../components/Left.vue';
import Right from '../components/Right.vue';
</script>


<template>
    <main>
        <Left/>
        <Right/>
    </main>
</template>


<style scoped>
    main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr; 
        height: 100vh;
    }


</style>