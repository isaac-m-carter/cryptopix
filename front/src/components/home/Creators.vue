

 


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

.tags_item{
    background-color: aqua;
    border-radius: 14px;
    margin: 2%;
    
}
.wrapper-tags{
    display: flex;
    justify-content: space-between;
}
</style>





<template>


<div class="wrapper-tags"> 
<div v-for="NTFitem in NTFallinfo" :key="NTFitem._id">  
    <h3 class="tags_item">{{NTFitem.tags}}</h3>  
</div>
</div>


<div  v-for="NTFitem in NTFallinfo" :key="NTFitem._id">
    <div class="viewcontainer">
    <h3>{{NTFitem.tags}}</h3>
    <p>view all</p>
    <h3> {{NTFitem.image}} </h3>
    </div>
    <div class="slideContainer">
    <img :src="NTFitem.image" alt="" class="content"> 
    <img :src="NTFitem.image" alt="" class="content"> 
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
