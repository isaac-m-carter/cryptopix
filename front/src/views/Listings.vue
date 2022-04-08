<template>
<h1>Listings</h1>

<br>
<div class ="listingcontainer">
<form action="" id="listingform" method="GET">

  <label for="artname">Artwork Name</label><br>
  <input type="text" id="artname" name="artname" placeholder="Artwork Title" required><br>

  <label for="imgURL">Image URL</label><br>
  <input type="text" id="imgURL" name="imgURL" placeholder="Image URL" required><br>

  <label for="desc">Description</label><br>
  <textarea name="desc" id="desc" placeholder="Enter artwork details here"></textarea>

  <label for="price">Price</label><br>
  <input type="number" id="price" name="price" placeholder="Item Price" >

  <label for="tags">Tags</label>

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

 <div class="submit">
    <button id="submitbtn" type="submit">Submit</button></div>
    </form>

</div>
    
</template>

 <script>
 export default{
    data(){
        return{
            nftnichesData:[],
            inputNftNicheData:{
               //replace with schema String(); bool = true ; Array()
               product_name:'',
               seller_id:'',
               buyer_id:'',
               price:'',
               description:'',
               sold:false,
               clicks:0,
               image:'',
               tags:'',
               commentmsg:'None'
            }
        };
    },
    methods:{
        async addNftNiche(){
            const response = await fetch('http://localhost:4000/nftniches/addnftniche',
            { 
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.inputNftNicheData)
                });
            const fetchedData = await response.json();
        }
    }
}
</script>

<style scoped>

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