


<script setup>

import {UseUserStore} from '../store/userStore.js'
let user = UseUserStore();

</script>


<template>
    <main>

        <div>nev : {{ user.getName}}</div>
        <div>jelszo : {{ user.getPassword}}</div>
        <div>username : {{ user.getUsername}}</div>
        <div>email : {{ user.getEmail}}</div>
        <div>szerep : {{ user.getRole}}</div>
        <div @click="$router.push({name: 'login'})">Back to login</div>


    </main>
</template>


<style scoped>

main{
    background-color: pink;
}
</style>