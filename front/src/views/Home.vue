<template>
<div class="title"><h1>Discovery</h1></div>

<div class="section">

        <!-- filtering system here -->
        <div class="wrapper-tags"> 
        <p class="tags_item" :class="{tag_selected: filterTags.allItems}" @click="filterTags.allItems= !filterTags.allItems">All Items</p>
        <p class="tags_item" :class="{tag_selected: filterTags.artFiltered}" @click="filterTags.artFiltered= !filterTags.artFiltered">Art</p>
        <p class="tags_item" :class="{tag_selected: filterTags.gameFiltered}" @click="filterTags.gameFiltered= !filterTags.gameFiltered">Game</p>
        <p class="tags_item" :class="{tag_selected: filterTags.photoFiltered}" @click="filterTags.photoFiltered= !filterTags.photoFiltered">Photos</p>
        <p class="tags_item" :class="{tag_selected: filterTags.musicFiltered}" @click="filterTags.musicFiltered= !filterTags.musicFiltered">Music</p>
        </div>

 <!-- v-if="((filterTags.arttag == artFiltered && artFiltered) || (filterTags.musictag == musicFiltered && musicFiltered) || (filterTags.photogtag == photoFiltered && photoFiltered) || (filterTags.gametag == gameFiltered && gameFiltered)) -->
        
        <h2>Trending</h2>
        <div class="wrapper">
            <div v-for="nftitem in my_list_array" :key="nftitem._id" >
                <ImgLike @click="localstoragefunc(nftitem._id)" v-if=" nftitem.clicks >= 15" :NftObject="nftitem" />
            </div>
        </div>

        <h2>Most Expensive</h2>
        <div class="wrapper">
            <div v-for="nftitem in my_list_array" :key="nftitem._id" >
                <ImgLike @click="localstoragefunc(nftitem._id)" v-if="nftitem.price >= 7" :NftObject="nftitem" />
            </div>
        </div>

        <h2>Recently Added</h2>
        <div class="wrapper">
            <ImgLike @click="localstoragefunc(nftitem._id)" v-for="nftitem in my_list_array" :key="nftitem.id" :NftObject="nftitem"
            :likedItems="userObjBody.likeditems"
            @liked="addtoLikeditems"
            />
        </div>
</div>


</template>

<script>
import { inject } from '@vue/runtime-core';

import ImgLike from "../components/ImgLike.vue";

   export default{
        data(){
            return{
                userid:'',
                userObjBody:{}, 
                my_list_array:[],
                filterTags:{
                allItems:false,
                artFiltered:false,
                gameFiltered:false,
                photoFiltered:false,
                musicFiltered:false,
                hiddenState: false
                },
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
                    commentmsg:{},
                    like:false
            }
            };
        },
        methods:{
            addtoLikeditems(nftID){
                this.userObjBody.likeditems.push(nftID);
                this.updateUserFunc();
            },
            // UPDATE one item with ID (requires providing BODY of data)
            async updateUserFunc(){
                const fetchURL = 'http://localhost:4000/users/update/'+this.userid;
                console.log(fetchURL);
                const response = await fetch(fetchURL, 
                    { 
                    method:"PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.userObjBody)
                    });
                const fetchedData = await response.json();  
                console.log(fetchedData);
            },
            // GET current user Obj
            async getUserbyID(){
                const fetchURL = 'http://localhost:4000/users/get/'+this.userid;
                console.log(fetchURL);
                const response = await fetch(fetchURL);
                const fetchedData = await response.json();
                this.userObjBody = fetchedData;
            },
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
            this.userid = localStorage.getItem("userid");
            this.getUserbyID();   
        },
        components: { ImgLike },
        inject: ['activeUserID'],
   }
</script>

<style>
.title{
  background-color:white;
  position:fixed;
  padding:2em 0;
  width:100%; 
  top:0;
}

.section{
    margin:4em 0;
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


.tags_item{
    background-color: #515661;
    border-radius: 14px;
    padding:10px;
    margin: 1%;
    color: white;
    font-weight: 400;
    text-align: center;
    width:100px;
    
}
.tag_selected{
    font-weight: 600;
    text-align: center;
    background-color: #3670FA;
}
.wrapper-tags{
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
}
  
</style>
