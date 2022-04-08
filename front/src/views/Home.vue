
<template>
<h1>Discovery</h1>



<h2>Trending</h2>
<div class="wrapper">
    
    <ImgLike v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"/>

    <!-- v-if clicks> 20 -->
</div>

<h2>Most Popular</h2>
<div class="wrapper">
    
    <ImgLike v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"/>
</div>

<h2>Recently Listed</h2>
<div class="wrapper">
    
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

h2{
    color:#3670FA;
}
    .home-toggle{
    color: #3670FA;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 40px;
    margin: .4rem;
}

.wrapper{
  min-width: 95%;
  -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 4px;
  text-decoration: none;
  padding-right: 70px;
  height: 180px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  overflow-x: auto;
}

.wrapper ::-webkit-scrollbar {
  width: 0;
  }
  
</style>
