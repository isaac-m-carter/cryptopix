
<template>
<h1>Watchlist</h1>

<!-- <br><br><br><br><br>
<h3>Error 404! This page is currently a work in progress.</h3> -->
 

<div class="wrapper-watch">
    <div v-for="nftitem in my_list_array" :key="nftitem._id" >
        <ImgLike v-if="nftitem.like == true" :NftObject="nftitem" />
    </div>
</div>

</template>

<script>

import ImgLike from "../components/ImgLike.vue";

   export default{
        data(){
            return{
                my_list_array:[],
                // fetch_API_link: ""
                inputNftNicheData:{
                    product_name:'',
                    seller_id:'',
                    buyer_id:'',
                    price:0,
                    description:'',
                    sold:false,
                    clicks:0,
                    image:'',
                    tags:{arttag:false, gametag:false, musictag:false, photogtag:false},
                    commentmsg:'None',
                    like:false
            }
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
    width: 95%;
}
</style>
