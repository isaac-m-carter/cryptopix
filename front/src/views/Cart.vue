<template>
    <div class="title"><h1>Cart</h1></div>

    <div class="section">
        <div class="wrapper-results">
        <CartResults @click="localstoragefunc(nftitem._id)" v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"/></div>
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
            },
            async localstoragefunc(input){
                localStorage.setItem("localnftid", input);
                }

        },
        created(){
            this.api_fetch_func();
            
        },
        components: { CartResults }
   }


</script>

<style scoped>
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
</style>