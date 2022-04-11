<script setup>
    import User from '../components/account/User.vue'
</script>

<template>
    <h1>Account</h1>

    <div class="main-container">
        

        <User />
        <!--maybe logic issss....uhhh if nftitem.seller_id == user_id then show listing???-->

    </div>

</template>

<style>

    .main-container{
        margin-top: 1rem;
        padding: 1rem;
    }
</style>