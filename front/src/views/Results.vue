
<template>


    <h1>Search</h1>

 <!-- <div v-for="component in allNFT"> 
   < Samplecomponent v-if="component.price<= priceslider && "  /> 
    </div>-->


<div class="search-container">
    <form action="">
    <input type="text" id="search" name="search" placeholder="Search">
    <button type="submit"><img src="https://www.flaticon.com/svg/vstatic/svg/3917/3917754.svg?token=exp=1649112791~hmac=8ececcb50f595205036c8c89f3794ce5"></button>
    </form>
    </div>

    <!-- ahref to new refine search page-->
    <div class="refine">
        <h5>REFINE SEARCH</h5>
        <!-- find a better range slider -->
        <div class="slidecontainer">
            <h5>PRICE RANGE</h5>
        <input type="range" min="0.01" max="10" value="5" class="slider" id="RangeETH">
        <div class="ethlabels"><h5>0.01 ETH</h5><h5>10 ETH</h5></div>
        <p>Value: <span id="demo"></span></p>
        </div>

    <!-- checkbox
        Recently Added
        Verified Creators Only
        Tags -->
    
    <div class="wrapper-results">
        <CartResults v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"/></div>

    </div>

    

</template>

<script>

import CartResults from "../components/CartResults.vue";

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

                console.log(this.my_list_array[0].image);
            }
        },
        created(){
            this.api_fetch_func();
            
        },
        components: { CartResults }
   }


</script>


<style scoped>

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
  width: 100%;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #3670FA;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #3670FA;
  cursor: pointer;
}

.ethlabels{
    display:flex;
    justify-content: space-between;
    color:#3670FA;
}

</style>