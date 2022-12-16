<script setup>

import { ref } from "vue"
import router from "../router";
import { userData } from "../store/index.js"

const store = userData()
const checkout = () => {
    router.push("./checkout")
}
const remove = (index) => {
    delete store.shop[index]
    console.log(index);
}

</script>

<template>
    <h1 style="text-align: center;">Your Shopping Cart</h1>

    <body>
        <div class="movieData" v-for=" data, index of store.shop">
            <h1 style="position: absolute; font-size: 100%; width: 10%; color: green;">{{ data.Title }}</h1>
            <img :src="data.Poster" @click="remove(index)" />
        </div>
    </body>
    <button @click=checkout() v-if = "store.shop">CHECKOUT!</button>
</template>

<style scoped>
body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    width: 100vw;
}

img {
    aspect-ratio: 3/4;
    height: 50vh
}

button {
    position: relative;
    margin-top: 3rem;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 55vw;
    height: 10vh;
}
</style>