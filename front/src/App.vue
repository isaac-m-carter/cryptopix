<script setup>
  import BottomNav from './components/BottomNav.vue'
  import Head from './components/Head.vue';
</script>

<template>
  <Head />
  <BottomNav />

  <router-view></router-view>
  
</template>

<style>
/* @import './assets/base.css'; */

</style>
