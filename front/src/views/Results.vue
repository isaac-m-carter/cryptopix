
<template>
    <h1>Search</h1>
    <div class="search-container">
        
        <input type="text" id="search" name="search" placeholder="Search">
        <button><i class="fi fi-rr-search"></i></button>
        
    </div>

    <div class="refine">
        
        <h5>MAXIMUM PRICE</h5>
        <div class="slidecontainer">
            <input v-model="nftvalue" type="range" min="0" max="10" class="slider" id="RangeETH">
            <p>{{nftvalue}}</p> 

             <!-- rangeValue.innerText = this.value -->
        </div>

        <div class="ethlabels"><h5>0.01 ETH</h5><h5>10 ETH</h5>
        </div>

        <h5>TAGS</h5>

    <div class="highlight-container">
        <div :class="{highlightClass:arttagWanted}" @click="arttagWanted = !arttagWanted">
        <p>Art</p>
        </div>
        <div :class="{highlightClass:gametagWanted}" @click="gametagWanted = !gametagWanted">
        <p>Game</p>
        </div>
        <div :class="{highlightClass:photogtagWanted}" @click="photogtagWanted = !photogtagWanted">
        <p>Photos</p>
        </div>
        <div :class="{highlightClass:musictagWanted}" @click="musictagWanted = !musictagWanted">
        <p>Music</p>
        </div>
    </div>

        <div class="search">
    <button @click="api_fetch_func" id="searchbtn" >Search</button></div>
        <br><br><br>
    </div>

  <div class="wrapper-results" :class="{hiddenclass:hide}">

        <div v-for="nftitem in my_list_array" :key="nftitem._id" >
            <CartResults v-if="((nftitem.tags.arttag == arttagWanted && arttagWanted) || (nftitem.tags.musictag == musictagWanted && musictagWanted) || (nftitem.tags.photogtag == photogtagWanted && photogtagWanted) || (nftitem.tags.gametag == gametagWanted && gametagWanted)) && nftitem.price <= nftvalue" :NftObject="nftitem"/>
        </div>

</div>  
            
   
</template>

<script>

import CartResults from "../components/CartResults.vue";

    export default{
        data(){
            return{
    
                my_list_array:[],
                // fetch_API_link: ""
                nftvalue:0,
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
            },
            arttagWanted: false,
            musictagWanted:false,
            photogtagWanted:false,
            gametagWanted:false,
            hide:true,
            };
        },
        methods:{
            async api_fetch_func(){
                const response = await fetch("http://localhost:4000/nftniches/");
                const dataset = await response.json();
                console.log(dataset);
                this.my_list_array = dataset;
                this.hide=false;
            }
        },
        created(){
            // this.api_fetch_func();
            
        },
        // computed:{
        //     computedBoolean(){
        //         return nftitem.tags.arttag == this.arttagWanted && nftitem.tags.musictag == this.musictagWanted;
        //     }
        // },
        components: { CartResults }
   }


</script>


<style scoped>

.hiddenclass{
    display:none;
}
.fi{
    color:white;
}
.search-container {
    margin: 10px 0;
    border: 1px solid rgba(54, 112, 250, 0.3);
    border-radius: 20px;
    height: 38px;
    line-height: 38px;
    font-family: Montserrat;
    padding-left:5px;
    width:100%;
}
.search-container input{
    border: transparent;
    font-family: Montserrat;
    padding-left:5px;

}
.search-container img{
    height: 20px;
    filter:invert();
}

.search-container button{
    float:right;
    border:transparent;
    background: #3670FA;
    border-radius: 20px;
    height:38px;
    width:38px;
    
}

.slidecontainer {
 /* width:100%; */
 height:60px;
 padding-left: 40px;
 display:flex;
 align-items:center;
}

.slidecontainer p {
 font-size:26px;
 font-weight:600;
 font-family: Montserrat;
 padding-left:20px;
 color:#3670FA;
}

.slidecontainer input[type="range"] {
 -webkit-appearance:none !important;
 width:420px;
 height:2px;
 background:#3670FA;
 border:none;
 outline:none;
}
.slidecontainer input[type="range"]::-webkit-slider-thumb {
 -webkit-appearance:none !important;
 width:30px;
 height:30px;
 background:#fcfcfc;
 border:2px solid #3670FA;
 border-radius:50%;
 cursor:pointer;
}
.slidecontainer input[type="range"]::-webkit-slider-thumb:hover {
 background:#3670FA;
}

.ethlabels{
    display:flex;
    justify-content: space-between;
    color:#3670FA;
    margin:0;
    padding:0;
}

.highlight-container{
  font-weight: 400;
  font-size: 13px;
  display:flex;
  justify-content: space-around;
  border: 1px solid rgba(54, 112, 250, 0.3);
  border-radius: 20px;
  text-align: center;
  margin: 10px 0;
  height: 40px;
  line-height: 13px;
  /* width:100%;
  overflow-x: hidden;
  overflow-x: scroll; */
}

.highlight-container p{
  width: 5em;
}
.highlightClass
{
  border-radius: 20px;
  transition: 0.2s all ease-in-out;
  background-color:#3670FA;
  width: 5em;
  color:white;
  height: 40px;
line-height: 13px;
}

#searchbtn{
    text-decoration: none;
  height: 38px;
  width: 180px;
  border-radius: 20px;
  background: #3670FA;
  color:white;
  border: 1px solid transparent;
  font-family: Montserrat;
    font-weight: 500;
    font-size: 16px;
}

#searchbtn:hover {
  background: white;
   border: 1px solid #3670FA;
   color:#3670FA;
}

.search{
    text-align: center;
    margin-top: 40px;
}
</style>