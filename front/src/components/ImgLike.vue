<template>
    <div class="mainimage">
        <img class="NFTImg" :src="NftObject.image" alt="">   
        <div class="like"><i class="fi fi-rr-heart"></i>  </div><!-- this should toggle on and off. if on = show up in watchlist  -->
        <div @click="liked_toggle"  :class="{liked_NFT_circle: liked}" class="like"><i :class="{liked_NFT: liked}" class="fi fi-rr-heart"></i>  </div>   
    </div>

</template>

<style scoped>
.liked_NFT{
    color: red;
}


.likedclass{
    color:red;
}
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

.liked_NFT_circle{
    background-color: rgba(203, 203, 203, 0.775);
}

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

            inputNftNicheData:{
                    product_name:'',
                    seller_id:'',
                    buyer_id:'',
                    price:0,
                    description:'',
                    sold:false,
                    clicks:0,
                    image:'',
                    tags:{arttag:false, gametag:false, musictag:false, photogtag:false},
                    commentmsg:'None',
                    like:false
            }
        }
    },

    methods: {
        liked_toggle() {
            this.liked = !this.liked;
            
        }
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