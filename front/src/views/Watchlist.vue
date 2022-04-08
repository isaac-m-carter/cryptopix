
<template>
<h1>Watchlist</h1>
<div class="wrapper-watch">
    
    <ImgLike v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"/>

</div>

</template>

<script>

import ImgLike from "../components/ImgLike.vue";

   export default{
        data(){
            return{
                my_list_array:[],
                // fetch_API_link: ""
            };
        },
        methods:{
            async api_fetch_func(){
                const response = await fetch("http://localhost:4000/nftniches/");
                const dataset = await response.json();
                console.log(dataset);
                this.my_list_array = dataset;

            }
        },
        created(){
            this.api_fetch_func();
            
        },
        components: { ImgLike }
   }
</script>

<style>
.wrapper-watch{
    
    display:grid;
    grid-template-columns: 50% 50%;
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 10px;
    justify-content: center;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 20px;
    width: 380px;
}
</style>
