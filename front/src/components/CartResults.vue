<template>

<router-link to="../views/Details">
<div class="container">
    <div class="left"><img class="NFTImg" :src="NftObject.image" alt=""></div>
    <div class="vl"></div>
    <div class=" middle"><span>{{NftObject.product_name}}</span> By<br> <span> {{NftObject.seller_id}}</span></div>
    <div class="vl"></div>
    <div class="right">{{NftObject.price}} ETH</div>
</div>
</router-link>


</template>


<style scoped>
.container{
     margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 20px;
    height:5em;
}

.left{
    width: 5em;
    border-radius:20px;
    justify-content: flex-start;
    height:5em;
}

.left img{
    object-fit: cover;
    border-radius:20px;
    width:5em;
    height:5em;
}

.middle{
    height:5em;
 line-height: 2.5em;
    width: 15em;
    font-weight: 700;
    overflow: hidden;
    color:black;
    font-size: 10px;
    margin-left: 2em;
    margin-right:2em;
      overflow-y: scroll;
  overflow-x: scroll; 
}

.middle span{
    color:#3670FA;
}

.right{
    width: 5em;
    font-weight: 800;
    text-align: center;
    color:black;
    /* line-height: 60px; */
    padding-right:1em;
}


.vl {

    height: 5em;
    display:flex;
    flex-direction:column;
    justify-content: center;
    border-right:thin solid #3670FA;
    margin-right:1rem;
    padding-left:1rem;

}

hr{
    color:#3670FA;
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