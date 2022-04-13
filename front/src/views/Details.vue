<template>
    <div class="title"><h1>{{nicheproduct.product_name}}</h1> 
    <br>
            
            <div class="back" @click="$router.back()"><i class="fi fi-sr-angle-left"></i></div>
            
    </div>

    <!-- <p class="blue_text">Clicks <span>n/a</span></p> -->
    <div class="section">
    <div class = "mainsection">
        <img id="NFT_img" class="NFTImg" :src="nicheproduct.image" alt="">
         <div class="like" :class="{liked_NFT_circle:nicheproduct.like}" @click="nicheproduct.like = !nicheproduct.like">
              <i class="fi fi-rr-heart"></i>
        </div> 
    </div>
    <div class="details_info">

        <div class="Name_wrap">
            <h1 id="NFT_name">{{nicheproduct.product_name}}</h1>
            <!-- <span>{{nicheproduct}}</span> -->
            <h1 id="Price">{{nicheproduct.price}} ETH</h1>
        </div>

        <div class="Name_wrap">
            <p class="blue_text"> <span>By</span> {{nicheproduct.seller_id}}</p>
            
        </div>

        <p id="about_NFT">{{nicheproduct.description}}</p>

        <!-- <p class="blue_text">Tags</p> -->

    </div>

    <router-link to="/Cart">
    <div class="submit">
    <button id="Add_to_cart">Add to cart</button>
    </div>
    </router-link>

    <h1 class="blue_text_2">Comments</h1>

    <div class="User_comments">

        <div class="Profile_img"></div>

        <h3>User#1373</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque!</p>

    </div>


    <h3 class="blue_text_2">Write a comment / ask a question</h3>
    <textarea name="Comments" id="Comments" cols="30" rows="10"></textarea>

    <div class="comment_buttons">
        <input id="submit" type="submit" value="Comment">
        
        <button id="Cancel_Button">Cancel</button>
    </div>

    
    <button id="to_top">Return to top</button>
    </div>
</template>

<style scoped>
.back i{
    font-weight: 900;
    color:black;
    font-size: 20px;
}

.title{
  background-color:white;
  position:fixed;
  padding:30px 0;
  width:100%; 
  top:0;
}

.title h1{
    font-size: 25px;
    width:50%
}
.section{
    margin:8.5em 0;
}

.mainsection{
     position:relative;
}

#NFT_img{
    width: 100%;
    height: 600px;
    border: thin black solid;
    border-top-left-radius:20PX;
    border-top-right-radius:20PX;
    margin-top:1em;
    object-fit:cover;
}

.like{
    position:absolute;
    right:0;
    bottom:0;
    z-index: 1;
    padding:10px;
    margin:20px;
    border-radius:50%;
    background: rgba(0, 0, 0, 0.507);
    cursor:pointer;
    height:60px;
    width:60px;
     color:white;
     font-size:60px;
}
.liked_NFT_circle{
    background-color: #E0456B !important; 
}

/* i{
    color:white;
    font-size:60px;
} */

span{
    color: grey;
    font-weight: 400;
}

.details_info{
    border: thin solid #3670FA;
    width: 100%;
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
}

.Name_wrap{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1em;
}

#NFT_name{
    font-size:1.5em;
    margin-left: 10px;
}
#Price{
    font-size:1.5em;
    margin-right: 10px;
}

#amount{
    margin-right: 10px;
}

.blue_text{
    margin-left: 10px;
    color: #3670FA;
    font-weight: 600;
}

.blue_text_2{
    margin-left: 10px;
    color: #3670FA;
    font-weight: 600;
    text-align: center;
}

#about_NFT{
    margin-left: 10px;
}

#Add_to_cart{
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

#Add_to_cart:hover{
    background: white;
   border: 1px solid #3670FA;
   color:#3670FA;
}

.submit{
    text-align: center;
    margin-top: 40px;
}

.Profile_img{
    width:50px;
    height:50px;
    border-radius:30px;
    border: thin black solid;
}

textarea{
    width: 70%;
    border-style: none;
    border: thin solid rgb(199, 199, 199);
    border-radius:25px;
    display: block;
    margin: 0 auto;
}

.comment_buttons{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 0.5em;
    width: 40%;
    
}

#submit{
    color:white;
    background-color:#3670FA;
    border-style:none;
    border-radius:10px;
    padding: 1em;
    padding-top:0.5em;
    padding-bottom: 0.5em;
}

#Cancel_Button{
    background: none;
    border-style: none;
    border-bottom: #3670FA thin solid;
    color: #3670FA;
}

#to_top{
    color:#3670FA;
    border-style: none;
    border-bottom: #3670FA thin solid;
    font-size:14px;
    background-color:white;
    display: block;
    margin: 0 auto;
    margin-top: 1em;
    margin-bottom:7em;
}
</style>

<script>
    export default{
        data(){
            return{
                nicheproduct:{}, //add id of comment
                nicheid:'',
                
            };
        },
        methods:{
            // async localstoragefunc(input){
            //     localStorage.setItem("localnftid", input);
            //     }

                // GET one item with ID
                async getNftNicheFunc(nftnicheID){
                   
                    const fetchURL = 'http://localhost:4000/nftniches/get/'+nftnicheID;
                    console.log(fetchURL);
                    const response = await fetch(fetchURL);
                    const fetchedData = await response.json(); 
                    console.log(fetchedData);
                    this.nicheproduct=fetchedData;
                    
                },
        },
        created(){
         localStorage.getItem("localnftid");
         this.nicheid = localStorage.getItem("localnftid");
         this.getNftNicheFunc(this.nicheid);
        },
   }

</script>