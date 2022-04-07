<template>

<div class="container">
    <div class="left"><img class="NFTImg" :src="NftObject.urlToImage" alt=""></div>
    <div class=" middle">{{NftObject.product_name}} {{NftObject.seller_id}}</div>
    <div class="right">Price: {{NftObject.price}}</div>
</div>

</template>

<style scoped>

</style>


<script setup>
defineProps({
NftObject:{
    type:Object,
    required:true,
    },
});
</script>