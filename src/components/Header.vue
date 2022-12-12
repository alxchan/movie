<script setup>
import router from "../router";
import { userData } from '../store/index.js'
const store = userData()

let logout = () => {
    store.login = false;
    router.push("./");
}

let login = () => {
    router.push("./login")
}

let home = () => {
    router.push("./")
}

let shop = () => {
    if (store.login) {
        router.push("./shop")
    }
}
</script>

<template>
    <div class="header">
        <img src="../image.png" style="width: 5%;" />
        <h1>TheBest Movie Co.</h1>
        <div class="list">
            <button @click="home()">Home</button>
            <button @click="login()" v-if="!store.login">Login</button>
            <button @click="shop()" v-if="store.login">Shop</button>
            <button>Contact</button>
            <button @click="logout()" v-if="store.login">Logout</button>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    width: 100vw;
    height: 8vh;
    align-items: center;
    justify-content: flex-start;
    background-color: red;
}

h1 {
    text-align: left;
    flex-basis: 70%;
    margin-left: 50px;
}

button {
    list-style: none;
    padding: 20px;
    width: 95px;
    background-color: transparent;
    border: none;
    user-select: none;
}

.list {
    margin: 0px;
    display: flex;
    flex-basis: 20%;
    height: 100%
}

button:hover {
    color: black;
    transition: all linear 0.5s;
}
</style>