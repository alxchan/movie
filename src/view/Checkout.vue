<script setup>
import Header from '../components/Header.vue'
import ShoppingCart from '../components/ShoppingCart.vue';
import { userData } from '../store/index.js'

const store = userData();

console.log(store.shop);

</script>

<template>
  <Header></Header>
<div style = "margin: 1rem;">
  <h1>You have sucessfully purchased the following movies:</h1>
  <h1 v-for="data in store.shop" style = "margin: 2rem" >{{data.Titles}}</h1>
  <h1 style = "margin-bottom: 1rem">Codes will be distributed via email within 48 hours. Contact our support if you do not receive your code within this timeframe.</h1>
  <h1>If you purchased additional copies of the same movie, you will be granted an additional access code which can be given to others.</h1>
</div>
</template>

<style>
</style>
