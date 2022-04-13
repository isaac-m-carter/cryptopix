<template>
<div class="title"><h1>Edit Listing</h1></div>

      <div class="section">
          <div class ="listingcontainer">
         
              <form @submit.prevent="updateNftNiche"  id="listingform" action="" method="">

                <label for="artname">Artwork Name</label><br>
                <input v-model="nftitem.product_name" type="text" id="artname" name="artname" placeholder="Artwork Title"><br>
                 
                <label for="imgURL">Image URL</label><br>
                <input v-model="nftitem.image" type="text" id="imgURL" name="imgURL" placeholder="Image URL"><br>

                <label for="desc">Description</label><br>
                <textarea v-model="nftitem.description" name="desc" id="desc" placeholder="Enter artwork details here"></textarea>

                <label for="price">Price</label><br>
                <input v-model="nftitem.price" type="number" id="price" name="price" placeholder="Item Price" >


                <div class="submit">
                    <button id="submitbtn" type="submit">Submit</button>
                </div>

              </form>
          </div>
        </div>
    

</template>

 <script>
 export default{
    data(){
        return{
            nftitem:{
                product_name:'',
               seller_id:'',
               buyer_id:'',
               price:0,
               description:'',
               sold:false,
               clicks:0,
               image:'',
               tags:{arttag:false, gametag:false, musictag:false, photogtag:false},
               commentmsg:[],
               like:false
            },
        };
    },
    methods:{
        
        // GET current nftniche Obj
        async getNftNichebyID(){
            const response = await fetch('http://localhost:4000/nftniches/get/' + this.itemid);
            const fetchedData = await response.json();
            this.nftnicheObjBody = fetchedData;
        },

        // UPDATE one item with ID (requires providing BODY of data)
        async updateNftNiche(){
            const fetchURL = 'http://localhost:4000/nftniches/update/'+ this.nftitem._id;
            const response = await fetch(fetchURL, 
                { 
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.nftitem)
                });
            const fetchedData = await response.json();  
            console.log(fetchedData);

            this.$router.push('/Account');
            },
    },
    created() {
            const temp = localStorage.getItem("nftitem");
            this.nftitem = JSON.parse(temp);
    }
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
.uploadbtn{
    text-align: center;
}
.fi{
  color:#3670FA;
  font-size: 3em;
}

.listingcontainer input, .listingcontainer textarea{
    margin: 10px 0;
    border: 1px solid rgba(54, 112, 250, 0.3);
    border-radius: 20px;
    height: 38px;
    line-height: 38px;
    font-family: Montserrat;
    padding-left:5px;
}

.listingcontainer label{
    color: #3670FA;
    font-family: Montserrat;
    width:100%;
    font-weight: 600;
}

.listingcontainer input, .listingcontainer textarea{
    font-family: Montserrat;
    width:100%;
}

.listingcontainer #submitbtn{
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

.listingcontainer #submitbtn:hover {
  background: white;
   border: 1px solid #3670FA;
   color:#3670FA;
}

.submit{
    text-align: center;
    margin-top: 40px;
}

</style>