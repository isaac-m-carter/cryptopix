
<template>
 <div class="wrapper-tags"> 
<p class="tags_item">All Items</p>
<p class="tags_item">Art</p>
<p class="tags_item">Game</p>
<p class="tags_item">Photography</p>
<p class="tags_item">Musician</p>
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
    background-color: #515661;
    border-radius: 14px;
   padding: 6px;
   color: white;
    
}
.tags_item:hover{
    background-color: #3772FF;
}、
.wrapper-tags{
    display: flex;
    justify-content: space-between;
}
</style>
