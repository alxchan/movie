<script setup>
/* Have the movie poster set value to be equal to the title. That way, the pinia datastore will know which
ones you want to purchase */
import { ref } from "vue"
import { userData } from "../store/index.js"
import router from "../router"
const image = ref()
const store = userData()
store.getMovies()
let purchase = (index) => {
    store.shop.push({
        Titles: store.data[index].Titles,
        Posters: store.data[index].Posters,
    });
    console.log(store.data[index].Posters);
}

</script>

<template>
    <div class="posters">
        <img ref="image" v-for="(movieData, index) in store.data" :src="movieData.Posters" :value="movieData.Title"
            @click="purchase(index)" />
    </div>
</template>

<style scoped>
* ::after ::before {
    user-select: none;
}

.posters {
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
}

img {
    width: 20%;
    aspect-ratio: 3/4;
}
</style>