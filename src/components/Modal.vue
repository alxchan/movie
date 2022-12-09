<script setup>
import { userData } from '../store/index.js'

const store = userData()
console.log(store.shop)
let closeModal = () => {
  store.modal = false;
}

</script>

<template>
  <div class = "background" @click.self = "closeModal()">
    <div class="modal">
      <img :src=store.modalData[0].Posters />
      <div id="flex-styling">
        <div id="text">
          <button id='close' @click="closeModal()"></button>
          <h1 style="width: 85%; padding-bottom: 10px;">{{ store.modalData[0].Titles }}</h1>
          <h2>{{ store.modalData[0].Description }}</h2>
        </div>
        <button class="button" @click="store.purchase()">Purchase</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.background{
  height: 100vh;
  width: 100vw;
}

#close {
  position: relative;
  left: 94%;
  top: 2%;
  width: 1rem;
  height: 1rem;
  background-color: red;
}

#text {
  flex-basis: 85%;
}

.button {
  flex-basis: 10%;
  width: 75%;
  align-self: center;
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