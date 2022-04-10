
<template>
<div class="creater_container">
    <div >
    <img :src="NTFitem.image" class="creater_img">
    </div>
    <div>
    <h3>{{NTFitem.seller_id}}</h3>
    <p>+follow</p>  
    </div>
    <div class="creater_img">
    <img :src="NTFitem.image" class="creater_img">
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
.creater_img{
   height: 10px;
}
.creater_container{
    display: flex;
}
</style>
