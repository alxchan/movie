<script setup>
import router from "../router";
let login = () => {
    router.push("./login")
}

let home = () => {
    router.push("./")
}
</script>

<template>
    <div class="header">
        <h1>TheBest Movie Co.</h1>
        <div class="list">
            <li @click = "home()">Home</li>
            <li @click = "login()">Login</li>
            <li>Contact</li>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: flex-start;
    /* temporary color */
    background-color: red;
}

h1 {
    text-align: left;
    flex-basis: 80%;
    margin-left: 50px;
}

li {
    list-style: none;
    padding: 20px;
    width: 95px;
    user-select: none;
}

.list {
    margin: 0px;
    display: flex;
    flex-basis: 20%;
    height: 100%
}

li:hover {
    color: black;
    transition: all linear 0.5s;
}
</style>