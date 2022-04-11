<style scoped>
.W_img{
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
<template>
    <h1>Watchlist</h1>
    <div v-for="NTFitem in NTFallinfo" :key="NTFitem._id">  
    <button @click="variable = !variable">
    <img :src="NTFitem.image" class="W_img">
    </button>
</div>
</template>

<script>

export default{
    data(){
        return{
           
            variable : false,
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