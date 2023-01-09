<script setup>
import { ref } from "vue"
import router from "../router";
import { userData } from "../store/index.js"
const email = ref("");
const username = ref("");
const password = ref("");
const store = userData()
const error = ref(false)
let login = () => {
    error.value = false
    if (username.value == "tmdb" && password.value == "movies") {
        alert("correct login");
        router.push("./shop");
        store.login = true;
    }
    else{
        error.value = true;
    }
}

if (store.login) {
    setTimeout(() => {
        router.push("./shop")
    }, 10)
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
                    <p id="login" v-if = error>Login Info Is Incorrect!</p>
                    <input type="submit" value="Login" class="submitLog" />
                </form>
                <p id="login">Don't Have an Account?</p>
                <div class="break"></div>
                <p id="login" @click="register()">Register</p>
                <div class="break"></div>
            </div>
        </div>
    </body>
</template>

<style scoped>
button {
    width: 100vw;
    height: 100vh;
}

.break {
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
    padding: 5px;
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