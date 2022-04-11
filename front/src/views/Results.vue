
<template>
    <h1>Search</h1>
    <div class="search-container">
        <form action="">
        <input type="text" id="search" name="search" placeholder="Search">
        <button type="submit"><i class="fi fi-rr-search"></i></button>
        </form>
    </div>

    <div class="refine">
        
        <h5>PRICE RANGE</h5>
        <div class="slidecontainer">
            <input v-model="nftvalue" type="range" min="0" max="10" class="slider" id="RangeETH">
            <p>{{nftvalue}}</p> 

             <!-- rangeValue.innerText = this.value -->
        </div>

        <div class="ethlabels"><h5>0.01 ETH</h5><h5>10 ETH</h5>
        </div>

        <h5>TAGS</h5>

        <div class="radio-container">
                <input id="arttag" name="tagtypes" type="radio" value="art">
                <label for="arttag">Art</label>
                <input id="gametag" name="tagtypes" type="radio" value="game">
                <label for="gametag">Game</label>
                <input id="photogtag" name="tagtypes" type="radio" value="photography">
                <label for="photogtag">Photography</label>
                <input id="musictag" name="tagtypes" type="radio" value="music">
                <label for="musictag">Music</label>
        </div>

        <div class="search">
    <button id="searchbtn" >Search</button></div>
        <br><br><br>
    </div>



    <div class = "wrapper-results" v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem">
        <CartResults v-if="nftitem.price <= nftvalue "/></div> <!--&& nftitem.tag == this.tagtypes -->
        
    <!-- <div class="wrapper-results">
        <CartResults v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"/>
        </div>  
        
        results page
how do i refine it? the tag = grab from radio container
cartresults doesnt show anything-->

</template>

<script>

import CartResults from "../components/CartResults.vue";

    export default{
        data(){
            return{
    
                my_list_array:[],
                // fetch_API_link: ""
                nftvalue:0,
            };
        },
        methods:{
            async api_fetch_func(){
                const response = await fetch("http://localhost:4000/nftniches/");
                const dataset = await response.json();
                console.log(dataset);
                this.my_list_array = dataset;

                console.log(this.my_list_array);
            }
        },
        created(){
            this.api_fetch_func();
            
        },
        components: { CartResults }
   }


</script>


<style scoped>

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
 /* width:500px; */
 height:60px;
 padding-left: 40px;
 display:flex;
 align-items:center;
}

.slidecontainer p {
 font-size:26px;
 font-weight:600;
 font-family: Montserrat;
 padding-left:30px;
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
.radio-container{
    margin:10px 0;
    display:flex;
    justify-content: space-between;
    width:100%; 
      background: white;
  border: 1px solid rgba(54, 112, 250, 0.3);
  border-radius: 20px;
  padding: 5px;
}

.radio-container label {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 20px;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  text-align: center;
  transition: 0.2s all ease-in-out;
  width:100%;
  font-weight: 400;
}

.radio-container input[type="radio"] {
  display: none;
}

.radio-container input[type="radio"]:checked + label {
  background: #3670FA;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color:white;
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