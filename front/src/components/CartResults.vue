<template>

<div class="container">
    <div class="left"><img class="NFTImg" :src="NftObject.image" alt=""></div>
    <div class=" middle">{{NftObject.product_name}} <br> Creator: {{NftObject.seller_id}}</div>
    <div class="right">Price: {{NftObject.price}}</div>

    
</div>

<hr>
</template>

<style scoped>
.container{
    width:100%;
    display:flex;
    justify-content: space-between;
}

.left{
    border-radius:20px;
}

.left img{
    border-radius:20px;
    height:5em;
}

.middle{
    font-weight: 700;
}



</style>


<script setup>
defineProps({
NftObject:{
    type:Object,
    required:true,
    },
});
</script>