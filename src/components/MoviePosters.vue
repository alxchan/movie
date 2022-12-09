<script setup>
/* Have the movie poster set value to be equal to the title. That way, the pinia datastore will know which
ones you want to purchase */
import { ref } from "vue"
import { userData } from "../store/index.js"
import router from "../router"
import Modal from '../components/Modal.vue'
const posters = ref()
const store = userData()
store.getMovies()

let loadModal = (index) => {
      store.modal = true;
      store.load(index);
      store.specificMovie(store.id);
      posters.className = "modalOpen"
      console.log(posters);
}


// let purchase = (index) => {
//     store.modal = true
//     console.log(store.data[index].Ids)
//     store.shop.push({
//         Titles: store.data[index].Titles,
//         Posters: store.data[index].Posters,
//     });
//     store.specificMovie(store.id);
//     console.log(store.modalData);
// }

</script>

<template>
    <Modal v-if = 'store.modal'/>
    <div ref = "posters"  class="modal" >
        <img v-for="(movieData, index) in store.data" :src="movieData.Posters" :value="movieData.Title"
            @click="loadModal(index)" />
    </div>
</template>

<style scoped>

.modalOpen{
    overflow: hidden;
}

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