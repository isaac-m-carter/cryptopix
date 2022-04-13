<script setup>
    import User from '../components/account/User.vue'
</script>

<template>
<span>{{activeUserID}}</span>
    <div class="title"><h1>Account</h1></div>

    <div class="main-container">
        

        <User />
        
        <div v-for="nftitem in my_list_array" :key="nftitem._id" >
                <CartResults @click="localstoragefunc(nftitem._id)" v-if="nftitem.seller_id == userid" :NftObject="nftitem"/>
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
                userid: '',
                password: '',
            };
        },
        inject: ['activeUserID'],
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
            this.userid = this.activeUserID;
        },
        components: { CartResults }
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



.main-container{
    margin:5rem 0;
    padding: 1rem;
}
</style>