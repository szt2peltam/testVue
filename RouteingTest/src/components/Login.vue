<script setup>
import {onMounted, ref} from 'vue';
import router from '../router';
import {UseUserStore} from '../store/userStore.js'

let User = UseUserStore()

let email = ref('');
let passwordd = ref('');

async function  LoginUser(event) {
    event.preventDefault();
    let url = "https://vasvariapi-production.up.railway.app/api/User/login?Email="+ encodeURIComponent( email.value);
    let query = await fetch(url, 
    {
        method:"POST",
        body : JSON.stringify(
                {
                password: `${passwordd.value}`
                }),
        headers:{
            "Content-type": "application/json"
        }
        
    })

    let result = await query.json();
    if(result.statusCode != null){
        User.setUsername(result.value.username);
        User.setEmail(result.value.email);
        User.setName(result.value.name);
        User.setRole(result.value.role);
        User.setPassword(passwordd.value);
        router.push({name:"other"})
    }


}

</script>


<template>
    <div class="wrapper">

        <h1>Login page</h1>
        <form>
            <label >email</label>
            <input type="text" v-model="email">
            <label > password</label>
            <input type="password" v-model="passwordd">
            <button @click="LoginUser">Login</button>
        </form>
        <h2 @click="$router.push({name :'register'})">Register</h2>
    </div>
</template>


<style scoped>
</style>