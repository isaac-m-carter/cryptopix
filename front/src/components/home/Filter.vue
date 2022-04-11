
<template>
 <div class="wrapper-tags"> 
<div v-for="NTFitem in NTFallinfo" :key="NTFitem._id">  
    <h3 class="tags_item">{{NTFitem.tags}}</h3>  
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
