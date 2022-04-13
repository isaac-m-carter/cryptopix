<script setup>
    import User from '../components/account/User.vue'
    import ListingsListSelfCall from '../components/ListingsListSelfCall.vue'
</script>

<template>

    <div class="title"><h1>Account</h1></div>

    <div class="main-container">

        <User />
        <!-- <span>{{userObjBody}}</span> -->
        <div v-for="nftitemID in watchlisted" :key="nftitemID">
            <ListingsListSelfCall :NftID="nftitemID"  @delNftNicheEmit="delNftNicheFunc" />
        </div>
    </div>


</template>

<script>
    export default{
        data(){
            return{
                my_list_array:[],
                userid: '',
                password: '',
                watchlisted:[],
                userObjBody:{}
            };
        },
        inject: ['activeUserID'],
        methods:{

            async localstoragefunc(input){
                localStorage.setItem("localnftid", input);
            },
            // GET current user Obj
            async getUserbyID(){
                const fetchURL = 'http://localhost:4000/users/get/'+this.userid;
                console.log(fetchURL);
                const response = await fetch(fetchURL);
                const fetchedData = await response.json();
                this.watchlisted = fetchedData.sell;
                this.userObjBody = fetchedData;
            },

                    // DELETE one item with ID
            async delNftNicheFunc(nftnicheID){
                const fetchURL = 'http://localhost:4000/nftniches/delete/'+nftnicheID;
                console.log(fetchURL);
                const response = await fetch(fetchURL, { method:"DELETE"});
                const fetchedData = await response.json(); 
                console.log(fetchedData);

                const indexofDeletedNFT = this.watchlisted.indexOf(nftnicheID);
                console.log(indexofDeletedNFT)
                this.userObjBody.sell.splice(indexofDeletedNFT,1);    
                this.updateUser();
            },
                // UPDATE one item with ID (requires providing BODY of data)
            async updateUser(){
                const fetchURL = 'http://localhost:4000/users/update/' + this.userid;
                const response = await fetch(fetchURL, 
                    { 
                    method:"PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.userObjBody)
                    });
                const fetchedData = await response.json();  
                console.log(fetchedData);
            },

        },
        created(){
            this.userid = localStorage.getItem("userid");
            this.getUserbyID();
        },
        components: { ListingsListSelfCall }
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