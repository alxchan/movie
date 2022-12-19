<script setup>

import { objectToString } from "@vue/shared";
import { ref } from "vue"
import router from "../router";
import { userData } from "../store/index.js"

const store = userData()

const confirmOrder = () => {
    router.push("./checkout")
    modalv2.value = false;
}

const checkout = () => {
    modalv2.value = true;
    console.log(modalv2);
}

let modalv2 = ref(false);

let closeModal = () => {
    modalv2.value = false;
}

if (Object.keys(store.shop).length == 0) {
    router.push("./shop")
}
const remove = (index) => {
    delete store.shop[index]
    if (Object.keys(store.shop).length == 0) {
        router.push("./shop")
    }
}

</script>

<template>
    <h1 style="text-align: center;">Your Shopping Cart</h1>

    <body>
        <h1 v-if="Object.keys(store.shop).length != 0" style="text-align: start">Movies You are Purchasing</h1>
        <div class="container">
            <div class="movieData" v-for=" data, index of store.shop">
                <img class="posters-1" :src="data.Poster" @click="remove(index)" />
                <div class="text">
                    <h1>{{ data.Title }}</h1>
                    <h2>{{ data.Desc }}</h2>
                </div>
            </div>
        </div>

        <div v-if="modalv2" class="background" @click.self="closeModal()">
            <div class="modal">
                <button id='close' @click="closeModal()"></button>
                <div class="styling">
                    <h1 style="padding: 2%;">Movies:</h1>
                    <div class="containers" v-for="data in store.shop">
                        <img class="posters-2" :src="data.Poster" />
                        <h1 style="font-size: 20px;">{{ data.Title }}</h1>
                    </div>
                </div>
                <div class="payment-container" style = "height: --var(--height)">
                    <h1 style="padding: 1rem; color: gray; text-align: center;">Price</h1>
                    <h1 style="padding: 1rem; color: gray; text-align: center;">Movies:
                        ${{ Object.keys(store.shop).length }}</h1>
                    <h1 style="padding: 1rem; color: gray; text-align: center;">Payment Method:</h1>
                    <div class="payment">
                        <button id="paypal"></button>
                        <button id="credit"></button>
                        <button id="other">Other</button>
                    </div>
                </div>
                <button class="button" @click="confirmOrder()">Confirm Order</button>
            </div>
        </div>
    </body>
    <button class="checkout" @click=checkout() v-if="Object.keys(store.shop).length != 0">CHECKOUT!</button>
</template>

<style scoped>
.payment {
    position: relative;
    height: 20%;
}

#paypal {
    align-self: center;
    background-image: url(../paypal.svg);
    height: 90%;
    width: 25%;
    background-repeat: no-repeat;
    border: none;
    background-color: transparent;
}

#other {
    position: relative;
    width: 50%;
    height: 30%;
    border-radius: 5%;
    border: none;
    color: gray;
}

#credit {
    align-self: center;
    background-image: url(/src/credit-card-solid.svg);
    height: 90%;
    width: 25%;
    background-repeat: no-repeat;
    margin-left: 10px;
    padding: 10px;
    border: none;
    background-color: transparent;
}

.styling {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 70%;
    height: 300px;
}

.containers {
    display: flex;
    flex-direction: row;
    height: 10%;
    width: 100%;
    padding: 5%;
}

.background {
    position: fixed;
    top: 0%;
    height: 100vh;
    width: 100vw;
    background-color: rgb(4, 10, 24);
    z-index: 2;
}

#close {
    position: fixed;
    background-image: url(../x-solid.svg);
    background-color: transparent;
    border: none;
    background-repeat: no-repeat;
    left: 97%;
    top: 0%;
    width: 1rem;
}

.button {
    color: black;
    position: fixed;
    top: 85%;
    left: 85%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 10%;
    border-radius: 10%;
    border: none;
    background-color: lightblue;
}

#flex-styling {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;

}

.modal {
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(87, 87, 87);
    height: 500px;
    width: 700px;
    overflow: scroll;
    border-radius: 5%;
}

#text {
    height: 50%;
}

/* */

.text {
    width: 50%;
    overflow-wrap: break-word;
}

body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    width: 100vw;
    overflow: hidden;
}

.movieData {
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
}

.container {
    margin: 5%;
    height: 50vh;
    width: 100vw;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.posters-1 {
    aspect-ratio: 3/4;
    height: 50vh
}

.posters-2 {
    height: 100%;
    aspect-ratio: 3/4;
    padding-right: 5%;
}

.checkout {
    position: relative;
    margin-top: 3rem;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 55vw;
    height: 10vh;
}

.payment-container {
    text-align: center;
    background-color: white;
    border-radius: 5%;
    width: 30%;
    height:var(--height);
}
</style>