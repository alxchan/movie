<script setup>
/* Have the movie poster set value to be equal to the title. That way, the pinia datastore will know which
ones you want to purchase */
import { ref } from "vue"
import { userData } from "../store/index.js"
import router from "../router"
import Modal from '../components/Modal.vue'
const posters = ref()
const store = userData()
let getData = () => {
    for (data in store.shop) {
        console.log(data.Titles)
        console.log(data.Posters);
    }
}
</script>

<template>
    <div class = "movieData" v-for="data in store.shop">
        <h1>{{ data.Titles }}</h1>
        <img :src="data.Posters" />
    </div>
</template>

<style scoped>

</style>