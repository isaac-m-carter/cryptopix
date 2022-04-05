<script setup>
  import Head from './views/Head.vue'
  import Nav from './views/nav/Nav.vue'
  import BottomNav from './views/nav/BottomNav.vue'
</script>

<template>
  
    <Head />
    <Nav />
    <BottomNav />
 
    <router-view></router-view>
  
</template>

<style>
/* @import './assets/base.css'; */

</style>
