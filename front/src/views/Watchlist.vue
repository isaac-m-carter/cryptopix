
<template>
    <div class="title"><h1>Watchlist</h1></div>

   <img :src="NTFitem.likeditems" alt="">

</template>

<script>

export default{
    data(){
        return{
           
        
            NTFallinfo : []
        };
    },
}
</script>

<style>
.title{
  background-color:white;
  position:fixed;
  padding:30px 0;
  width:100%; 
  top:0;
  z-index:2;
}


</style>
