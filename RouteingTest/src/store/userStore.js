import { defineStore } from "pinia";

export const UseUserStore = defineStore("user",{


state: ()=>({
    username:null,
    email:null,
    password:null,
    name:null,
    role:null

}),
actions:{

    setUsername(newName){
        this.username = newName;
    },
    setEmail(email){
        this.email = email;
    },
    setPassword(password){
        this.password = password;
    },
    setName(name){
        this.name = name;
    },
    setRole(role){
        this.role = role;
    }


},

getters:{
    getName : (state) => state.name,
    getUsername : (state) => state.username,
    getPassword : (state) => state.password,
    getEmail : (state) => state.email,
    getRole : (state) => state.role
},


persist:true
})








