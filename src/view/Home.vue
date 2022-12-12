<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
</script>

<template>
  <Header></Header>
  <Hero></Hero>
  <Footer></Footer>
</template>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
  box-shadow: inset 0 0 5px red;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 89, 89, 0.411);
}
</style>

<style scoped>

*{
  overflow: hidden;
}

</style>