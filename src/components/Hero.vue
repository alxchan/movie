<script setup>
import router from '../router';
import { userData } from '../store/index.js'

const store = userData()
const toShop = () => {
    if(store.login){
        router.push("./shop");
    }
    else{
        router.push("./login");
    }
}
</script>

<template>
    <div class="background">
        <div class="shadow">
            <img src="https://cdn.discordapp.com/attachments/819379407978233879/1047715279108591687/image.png">
            <button class="redirect" @click = "toShop()">Shop Today</button>
        </div>
        <h1>Grab Ultra 4K Movies At The Best Price.</h1>
    </div>
</template>

<style scoped>
.redirect {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 30%;
    height: 5%;
    margin-top: 5%;
    color: black;
    border: none;
}

.redirect:hover{
    background-color: grey;
    color: white;
    transform: all 1s;
}

h1 {
    position: absolute;
    text-align: center;
}

.background {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
    width: 100vw;
}

img {
    filter: blur(4px);
    width: 100%;
    height: 100%;
}

.shadow {
    height: 100%;
    width: 100%;
    box-shadow: inset 0px 0px 5px 5px red;
}
</style>