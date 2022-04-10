
 


<style scoped>
.content{
    background-color: blue;
    margin: 2px;
    min-width: 200px;
    height: 200px;
}

.slideContainer{
    display: flex;
    overflow: scroll;
}
.viewcontainer{
    display: flex;
    justify-content: space-between;
}
.tagscontainer{
    display: flex;
    justify-content: space-around;
    height: 5vh;
    background-color: blueviolet;
}
.tags_item{
    background-color: aqua;
}
</style>





<template>
<!-- component.vue -->
<div class="tagscontainer" v-for="NTFitem in NTFallinfo" :key="NTFitem._id">
    
    <h3 class="tags_item">{{NTFitem.tags}}</h3>
   
    
</div>


<div  v-for="NTFitem in NTFallinfo" :key="NTFitem._id">
    <div class="viewcontainer">
    <h1>{{NTFitem.product_name}}</h1>
    <p>view all</p>
    </div>
    <div class="slideContainer">
    <img :src="NTFitem.image" alt="" class="content"> 
    <img :src="NTFitem.image" alt="" class="content"> 
    <img :src="NTFitem.image" alt="" class="content"> 
    <img :src="NTFitem.image" alt="" class="content">
    <img :src="NTFitem.image" alt="" class="content"> 
    </div>
</div>


<!-- <div class="slideContainer">
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
</div> -->

</template>

<script>
export default{
    data(){
        return{
           
            NTFallinfo : []
        };
    },
    methods:{
        async fetchAPI(){
            const response = await fetch('http://localhost:4000/nftniches/');
            const fetchedData = await response.json();
            this.NTFallinfo= fetchedData;
        }
    },
    created(){
       this.fetchAPI();
     
    }
}
</script>

<script setup>

</script>
