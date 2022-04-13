<script setup>
    import User from '../components/account/User.vue'
</script>

<template>
    <div class="title"><h1>Account</h1></div>

    <div class="main-container">
        

        <User />
        
         <!-- <h5>Edit Listing</h5>
        <input type="text" v-model="nftitem.product_name" placeholder=" edit title">
        <input type="text" v-model="nftitem.price" placeholder="edit price">
        <input type="text" v-model="nftitem.image" placeholder=" edit image url">  -->
        
       <!--  @delUserEmit="delUser" @updUserEmit="updateUser"  -->


        <div v-for="nftitem in my_list_array" :key="nftitem._id" >
                <ListingsList @click="localstoragefunc(nftitem._id)" v-if="nftitem.seller_id == userid" @delUserEmit="delUser" @updUserEmit="updateUser" :NftObject="nftitem"/>
            <!-- {{nftitem.product_name}} -->
        </div>

        <!-- <div v-for="nftitem in my_list_array" :key="nftitem._id" >
            <div v-if="nftitem.seller_id == userid" :key="nftitem._id" >
                {{nftitem.product_name}}
                <input type="text" v-model="nftitem.product_name" placeholder=" edit title">
                <input type="text" v-model="nftitem.price" placeholder="edit price">
                <input type="text" v-model="nftitem.image" placeholder=" edit image url">  
                <ListingsList @click="localstoragefunc(nftitem._id)" v-if="nftitem.seller_id == userid" :NftObject="nftitem"/>
            </div>
        </div> -->

   
    </div>
</template>

<script>

import ListingsList from "../components/ListingsList.vue";

    export default{
        data(){
            return{
                my_list_array:[],
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

        
        //     async addNftNiche(){
        //     const response = await fetch('http://localhost:4000/nftniches/addnftniche',
        //     { 
        //         method:"POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(this.inputNftNicheData)
        //         });
        //     const fetchedData = await response.json();
        // },

                            // GET all data
        // async fetchAPI(){
        //     const response = await fetch('http://localhost:4000/nftniches/');
        //     const fetchedData = await response.json();
        //     this.nftnichesData = fetchedData;
        //     console.log(fetchedData);
        // },
        //         // GET one item with ID
        // async getNftNicheFunc(nftnicheID){
        //     const fetchURL = 'http://localhost:4000/nftniches/get/'+nftnicheID;
        //     console.log(fetchURL);
        //     const response = await fetch(fetchURL);
        //     const fetchedData = await response.json(); 
        //     console.log(fetchedData);
        // },
        //         // DELETE one item with ID
        // async delNftNicheFunc(nftnicheID){
        //     const fetchURL = 'http://localhost:4000/nftniches/delete/'+nftnicheID;
        //     console.log(fetchURL);
        //     const response = await fetch(fetchURL, { method:"DELETE"});
        //     const fetchedData = await response.json(); 
        //     console.log(fetchedData);
        // },
        //         // UPDATE one item with ID (requires providing BODY of data)
        // async updateNftNicheFunc(nftnicheID){
        //     const fetchURL = 'http://localhost:4000/nftniches/update/'+nftnicheID;
        //     console.log(fetchURL);
        //     const response = await fetch(fetchURL, 
        //         { 
        //         method:"PUT",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(this.newNftNicheInfo)
        //         });
        //     const fetchedData = await response.json();  
        //     console.log(fetchedData);
        // },

        },
        created(){
            this.api_fetch_func();
            this.userid = this.activeUserID;
        },
        components: { ListingsList }
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