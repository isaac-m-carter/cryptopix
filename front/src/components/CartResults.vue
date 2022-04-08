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
    width: 25%;
    border-radius:20px;
    text-align: center;
    
}

.left img{
    object-fit: cover;
    border-radius:20px;
    height:5em;
    width:5em;

}

.middle{
    height:5em;
    line-height: 2.5em;
    width: 50%;
    font-weight: 700;
    overflow: hidden;
}

.right{
    width: 20%;
    font-weight: 900;
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