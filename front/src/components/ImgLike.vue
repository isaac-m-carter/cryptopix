<template>
    <!-- <a :href ="ArticleObject.url"> -->
    <div class="mainimage">
        <img class="NFTImg" :src="NftObject.image" alt="">   
        <div class="like"><i class="fi fi-rr-heart"></i>  </div>
        
    </div>

    <!-- {{NftObject.product_name}} Price:{{NftObject.price}}  -->
   

</template>

<style scoped>

.mainimage{
    position:relative;
    margin: 0 1em;
    border-radius: 20px;
    height:180px;
    min-width: 180px;
}

.mainimage img{
    position:absolute;
    top:0;
    left:0;
    border-radius: 20px;
    height:180px;
    width: 180px;
    object-fit:cover;
    object-position: center;

}


.like{
    position:absolute;
    right:0;
    bottom:0;
    padding:5px 7px .5px 7px;
    margin:5px;
    border-radius:50%;
    background: rgba(0, 0, 0, 0.507);
    cursor:pointer;

}

i{
    color:white;
    font-size:23px;
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