<script setup>
/* Have the movie poster set value to be equal to the title. That way, the pinia datastore will know which
ones you want to purchase */
import { ref } from "vue"
import router from "../router"
import Header from "../components/Header.vue"
import MoviePosters from "../components/MoviePosters.vue"

</script>

<template>
<Header class = "adfasf"></Header>
<MoviePosters></MoviePosters>
</template>

<style scoped>
</style>