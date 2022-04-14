<template>

    <!-- <router-link to="../views/Details">-->
    <div class="mainimage" @click="$router.push('/Details')"> 
        
        <div class="cheatfix" >
            <img class="NFTImg"  :src="NftObject.image" alt="">
        </div>   
        
        <div class="like" :class="{liked_NFT_circle:NftObject.like}" @click="NftObject.like = !NftObject.like" :likedItems="NftObject.likeditems"
            @liked="addtoLikeditems">
            <i class="fi fi-rr-heart"></i>
        </div> 
    </div> 
    <!-- </router-link> -->
  
    
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

<script>
export default {
    data() {
        return {
            userid:'',
            userObjBody:{}, 
        }
    },

    methods: {
        addtoLikeditems(nftID){
                this.userObjBody.likeditems.push(nftID);
                this.updateUserFunc();
            },
            // UPDATE one item with ID (requires providing BODY of data)
            async updateUserFunc(){
                const fetchURL = 'http://localhost:4000/users/update/'+this.userid;
                console.log(fetchURL);
                const response = await fetch(fetchURL, 
                    { 
                    method:"PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.userObjBody)
                    });
                const fetchedData = await response.json();  
                console.log(fetchedData);
            },
            // GET current user Obj
            async getUserbyID(){
                const fetchURL = 'http://localhost:4000/users/get/'+this.userid;
                console.log(fetchURL);
                const response = await fetch(fetchURL);
                const fetchedData = await response.json();
                this.userObjBody = fetchedData;
            },
    },
    created() {
        this.userid = localStorage.getItem("userid");
        this.getUserbyID();   
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