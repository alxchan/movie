<script setup>
import { onBeforeMount, ref } from "vue"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/index.js"
import router from "../router";

const email = ref("");
const username = ref("");
const password = ref("");

if(auth.currentUser){
        router.push("./home")
    }
    
let login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            router.push("./home")
            alert("logged in");
            const user = userCredential.user;
        })
}


let register = () => {
    router.push("./register")
}
</script>

<template>

    <body>
        <div class="color-background">
            <div class="Login">
                <form @submit.prevent="login()">
                    <input type="text" placeholder="    Username" v-model="username" class="login-input" />
                    <input type="email" placeholder="    Email" v-model="email" class="login-input" />
                    <input type="password" placeholder="    Password" v-model="password" class="login-input" />
                    <input type="submit" value="Login" class="submitLog" />
                </form>
                <p id="login">Don't Have an Account?</p>
                <div class = "break"></div>
                <p id="login" @click="register()">Register</p>
                <div class = "break"></div>
            </div>
        </div>
    </body>
</template>

<style scoped>

.break{
  flex-basis: 100%;
  width: 0;
}
body {
    background-color: rgb(4, 10, 24);
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
}

#login {
    text-align: center;
    color: red;
    font-size: 15px;
}

.submitLog {
    color: red;
    border-radius: 5%;
    border: none;
    margin: 5px;
    width: 100%;
    height: 45px;
    background-color: rgb(4, 10, 24);
}

.submitLog:hover {
    box-shadow: 0px 1px 5px rgb(255, 0, 0);
}

::placeholder {
    color: rgba(255, 0, 0, 0.75);
}

input:focus::placeholder {
  color: transparent;
}

.login-input {
    color: red;
    border-radius: 5%;
    border: none;
    margin: 5px;
    width: 100%;
    height: 45px;
    background-color: rgb(4, 10, 24);
}

.login-input:hover {
    box-shadow: 0px 1px 5px rgb(255, 0, 0);
}

.login-input:focus {
    outline: none;
}

.color-background {
    background-color: rgba(37, 40, 43, 0.5);
    align-self: flex-start;
    height: 100vh;
    width: 45vw;
}

h1 {
    color: white;
    font-size: 50px;
}

.register {
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center
}

.Login {
    justify-content: center;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;
    align-content: center;
}
</style>