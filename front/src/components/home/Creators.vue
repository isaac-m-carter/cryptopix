

 


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
    color: #3772FF;
}


</style>





<template>





<div class="viewcontainer">
<h3>Trending</h3>
<p>view all</p>
</div>
 <div class="slideContainer">
        <div  v-for="NTFitem in NTFallinfo" :key="NTFitem._id">
    <img :src="NTFitem.image" alt="" class="content"> 
</div>
</div>


<div class="viewcontainer">
<h3>Most Popular</h3>
<p>view all</p>
</div>
 <div class="slideContainer">
        <div  v-for="NTFitem in NTFallinfo" :key="NTFitem._id">
    <img :src="NTFitem.image" alt="" class="content"> 
</div>
</div>

<div class="viewcontainer">
<h3>Recently Listed</h3>
<p>view all</p>
</div>
 <div class="slideContainer">
        <div  v-for="NTFitem in NTFallinfo" :key="NTFitem._id">
    <img :src="NTFitem.image" alt="" class="content"> 
</div>
</div>


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

<style scoped>
.content{
    background-color: #3670FA;
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
</style>
