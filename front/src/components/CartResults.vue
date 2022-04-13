<template>

<router-link to="../views/Details">
<div class="container">
    <div class="left"><img class="NFTImg" :src="NftObject.image" alt=""></div>
    <div class=" middle">{{NftObject.product_name}} <br> Creator: {{NftObject.seller_id}}</div>
    <div class="vl"></div>
    <div class="right">Price: {{NftObject.price}}</div>
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
    width: 10em;
    border-radius:20px;
    justify-content: flex-start;
    height:5em;
}

.left img{
    object-fit: cover;
    border-radius:20px;
    width:10em;
    height:5em;
}

.middle{
    height:5em;
    line-height: 2.5em;
    width: 15em;
    font-weight: 700;
    overflow: hidden;
    color:black;
    font-size: 14px;
    margin-left: 4em;
    margin-right:2em;
}

.right{
    width: 8em;
    font-weight: 900;

    color:#3670FA;
    line-height: 60px;
    margin-left: 2em;
}


.vl {
  border-left: 2px solid rgba(0, 0, 0, 0.055) ;
  height: 5em;

    display:flex;
    flex-direction:column;
    justify-content: center;
    border-left:thin solid #3670FA;
    padding-left:1em;

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