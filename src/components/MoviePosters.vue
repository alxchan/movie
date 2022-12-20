<script setup>
import { ref } from "vue"
import { userData } from "../store/index.js"
import router from "../router/index.js"
import Modal from '../components/Modal.vue'

const store = userData()
store.getMovies()
let movieId = ref(0);

let shoppingCart = () => {
  if (Object.keys(store.shop).length != 0) {
    router.push('/cart')
  }
  else {
    alert("Your shopping cart is empty.")
  }
}

let loadModal = (index) => {
  store.modal = true;
  movieId.value = index
  // console.log(movieId);
}

</script>

<template>
  <Modal v-if='store.modal' :id = "movieId"/>
  <div>
    <button class="cart" @click="shoppingCart()"></button>
    <div ref="posters" class="posters">
      <img v-for="movieData in store.data" :src="movieData.Posters" :value="movieData.Title"
        @click="loadModal(movieData.Ids)" />
    </div>
  </div>
</template>

<style scoped>
.cart {
  background-image: url(../assets/cart-shopping-solid.svg);
  width: 50px;
  background-color: gainsboro;
  border: none;
  height: 50px;
  position: fixed;
  left: 94%;
  top: 10%;
}

.cart:hover {
  background-color: grey;
  transition: all 0.2s;
}

.posters {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
}

img {
  width: 100%;
  aspect-ratio: 3/4;
}
</style>
