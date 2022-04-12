<template>

    
    <div class="mainimage">
        <router-link to="../views/Details">
        <!-- <a href = "../views/Details"> -->
        <div class="cheatfix">
            <img class="NFTImg" :src="NftObject.image" alt="">
        </div>   
        <!-- </a> -->
        </router-link>
            <div class="like" :class="{liked_NFT_circle:NftObject.like}" @click="NftObject.like = !NftObject.like">
              <i class="fi fi-rr-heart"></i>

           </div> 




            </div> 
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

/* .liked_NFT{
    color: white;
}

.likedclass{
    color:#E0456B;
}*/

i{
    color:white;
    font-size:23px;
}

</style>

<script>
export default {
    data() {
        return {
            my_list_array:[],
            liked: false,
        }
    },

    methods: {
        // liked_toggle() {
        //     this.liked = !this.liked;
            
        // }
    }
    
}
</script>

<script setup>
defineProps({
NftObject:{
    type:Object,
    required:true,
    },
});
</script>