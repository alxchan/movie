<script setup>
import { userData } from '../store/index.js'
import axios from "axios";
import { ref } from 'vue';

const store = userData()
let closeModal = () => {
  store.modal = false;
}

const props = defineProps({
  id: Number,
})

const modalData = ref({})

let specificMovie = async () => {
    modalData.value = {};
    // console.log(props.id);
    let response = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.id}`,{
        params: {
          api_key: "dae84c7eae2f2c63d4bdf1e712d56304",
          append_to_response: "videos",
        },
      })
      // console.log(response.data);
      modalData.value = {
        title: response.data.title,
        poster: "https://image.tmdb.org/t/p/w500/" + response.data.poster_path,
        description: response.data.overview,
        releaseDate: response.data.release_date,
        id: response.data.id,
      }
        // console.log(modalData);
      }
      
    await specificMovie();

</script>

<template>
  <div class="background" @click.self="closeModal()">
    <div class="modal">
      <img :src= modalData.poster />
      <div id="flex-styling">
        <div id="text">
          <button id='close' @click="closeModal()"></button>
          <h1 style="width: 85%; padding-bottom: 10px;">{{modalData.title }}</h1>
          <h2 style = "margin: 20px;">Released On: {{ modalData.releaseDate }}</h2>
          <h2>{{ modalData.description }}</h2>
        </div>
        <button class="button" @click="store.purchase(modalData)">Purchase</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0%;
  height: 100vh;
  width: 100vw;
  background-color: rgb(4, 10, 24);
  z-index: 2;
}

#close {
  position: relative;
  background-image: url(../assets/x-solid.svg);
  background-color: transparent;
  border:none;
  background-repeat: no-repeat;
  left: 94%;
  top: 2%;
  width: 1rem;
  height: 1rem;
}


#text {
  flex-basis: 75%;
  font-size:13px
}

.button {
  color: black;
  position: fixed;
  top: 85%;
  left: 74%;
  transform: translate(-50%, -50%);
  width: 30%;
  height: 10%;
}

#flex-styling {
  display: flex;
  flex-direction: column;

}

.modal {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  height: 500px;
  width: 700px;
}
</style>