<script setup>
/* Have the movie poster set value to be equal to the title. That way, the pinia datastore will know which
ones you want to purchase */
import { ref } from "vue"
import { userData } from "../store/index.js"
import router from "../router/index.js"
import Modal from '../components/Modal.vue'
import Footer from "./Footer.vue";

const store = userData()
store.getMovies()

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
  store.load(index);
  store.specificMovie(store.id);
}

</script>

<template>
  <Modal v-if='store.modal' />
  <div>
    <button class="cart" @click="shoppingCart()"></button>
    <div ref="posters" class="posters">
      <img v-for="(movieData, index) in store.data" :src="movieData.Posters" :value="movieData.Title"
        @click="loadModal(index)" />
    </div>
  </div>
</template>

<style scoped>
.cart {
  background-image: url(../cart-shopping-solid.svg);
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
