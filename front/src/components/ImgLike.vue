<template>

    <router-link to="../views/Details">
    <div class="mainimage">
        
        <div class="cheatfix">
            <img class="NFTImg" :src="NftObject.image" alt="">
        </div>   
        
        <div class="like" :class="{liked_NFT_circle:likedItems.includes(NftObject._id)}" @click="$emit('liked',NftObject._id )">
            <i class="fi fi-rr-heart"></i>
        </div> 
    </div> 
    </router-link>
  
    
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
    border-radius: 20px;
    height:180px;
    width: 180px;
    object-fit:cover;
    object-position: center;

}

.mainimage .cheatfix{
    border-radius: 20px;
    height:180px;
    width: 180px;
    background:transparent;
}

.like{
    position:absolute;
    right:0;
    bottom:0;
    z-index: 1;
    padding:5px 7px .5px 7px;
    margin:5px;
    border-radius:50%;
    background: rgba(0, 0, 0, 0.507);
    cursor:pointer;
    

}

.liked_NFT_circle{
    background-color: #E0456B !important; /*rgba(203, 203, 203, 0.775);*/
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
likedItems:{
    type:Array,
    required:true,
    },
});
</script>