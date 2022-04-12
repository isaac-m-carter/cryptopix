
<template>
    <div class="title"><h1>Watchlist</h1></div>

    <div class="section">
        <div class="wrapper-watch">
            <ImgLike v-for="nftitem in my_list_array" :key="nftitem._id" :NftObject="nftitem" />
            <!-- <div v-for="nftitem in my_list_array" :key="nftitem._id" >
                <ImgLike v-if="nftitem.like == true" :NftObject="nftitem" />
            </div> -->
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
            //     inputNftNicheData:{
            //         product_name:'',
            //         seller_id:'',
            //         buyer_id:'',
            //         price:0,
            //         description:'',
            //         sold:false,
            //         clicks:0,
            //         image:'',
            //         tags:{arttag:false, gametag:false, musictag:false, photogtag:false},
            //         commentmsg:'None',
            //         like:false
            // }
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
.title{
  background-color:white;
  position:fixed;
  padding:30px 0;
  width:100%; 
  top:0;
  z-index:2;
}

.section{
    margin:100px 0;
}

.wrapper-watch{
    display:grid;
    grid-template-columns: 38% 38%;
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 50px;
    justify-content: center;
    text-align: center;
    width: 95%;
    z-index: -2;
}
</style>
