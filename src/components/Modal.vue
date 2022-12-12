<script setup>
import { userData } from '../store/index.js'

const store = userData()
console.log(store.modalData)
let closeModal = () => {
  store.modal = false;
}

</script>

<template>
  <div class="background" @click.self="closeModal()">
    <div class="modal">
      <img :src=store.modalData[0].Posters />
      <div id="flex-styling">
        <div id="text">
          <button id='close' @click="closeModal()"></button>
          <h1 style="width: 85%; padding-bottom: 10px;">{{ store.modalData[0].Titles }}</h1>
          <h2 style = "margin: 20px;">Released On: {{ store.modalData[0].ReleaseDate }}</h2>
          <h2>{{ store.modalData[0].Description }}</h2>
        </div>
        <button class="button" @click="store.purchase()">Purchase</button>
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
  background-image: url(../x-solid.svg);
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