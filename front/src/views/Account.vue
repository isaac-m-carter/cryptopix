<script setup>
    import User from '../components/account/User.vue'
</script>

<template>
    <div class="title"><h1>Account</h1></div>

    <div class="main-container">
        

        <User />
        <!--maybe logic issss....uhhh if nftitem.seller_id == user_id then show listing???-->
        
    </div>
</template>

<style>
.title{
  background-color:white;
  position:fixed;
  padding:30px 0;
  width:100%; 
  top:0;
}



.main-container{
    margin:5rem 0;
    padding: 1rem;
}
</style>