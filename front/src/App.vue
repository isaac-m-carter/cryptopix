<script setup>
  import Head from './components/Head.vue';
  import Nav from './components/Nav.vue';
  import { computed } from 'vue'
</script>

<template>

<div class = "hiddenclass">
  <Head />
  <Nav />
</div>

<router-view></router-view>
  
</template>


<style>

@import './assets/base.css';
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
    max-width: 568px; 
    min-width: 320px;  
    margin-left: auto;
    margin-right: auto;
    padding: 3%;
    padding-bottom: 100px;
    scroll-behavior: smooth;
    font-family: Montserrat;

}
/* .hiddenclass{
    display:block;
} */


</style>
