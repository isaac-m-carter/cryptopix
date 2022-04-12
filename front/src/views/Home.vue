<template>
<div class="title"><h1>Discovery</h1></div>

<div class="section">

        <!-- filtering system here -->

        <h2>Trending</h2>
        <div class="wrapper">
            <div v-for="nftitem in my_list_array" :key="nftitem._id" >
                <ImgLike v-if="nftitem.clicks >= 15" :NftObject="nftitem" />
            </div>
        </div>

        <h2>Most Expensive</h2>
        <div class="wrapper">
            <div v-for="nftitem in my_list_array" :key="nftitem._id" >
                <ImgLike v-if="nftitem.price >= 7" :NftObject="nftitem" />
            </div>
        </div>

        <h2>Recently Added</h2>
        <div class="wrapper">
            <ImgLike v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"/>
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
.title{
  background-color:white;
  position:fixed;
  padding:30px 0;
  width:100%; 
  top:0;
}

.section{
    margin:100px 0;
}

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
  height: 180px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
}

.wrapper ::-webkit-scrollbar {
  width: 0;
  }
  
</style>
