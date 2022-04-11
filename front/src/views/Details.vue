<template>
    <h1>Details</h1>

    <div id="NFT_img"></div>
    <div class="details_info">

        <div class="Name_wrap">
            <h1 id="NFT_name">Name</h1>
            <h1 id="Price">1.02 ETH</h1>
        </div>

        <div class="Name_wrap">
            <p class="blue_text"> <span>By</span> Artist name</p>
            <p id="amount">1 of 1</p>
        </div>

        <p id="about_NFT">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ab quod culpa voluptatem dolores sequi tenetur deleniti maxime consequatur dolore, debitis mollitia reiciendis omnis vero consequuntur cumque tempora labore, assumenda ea corrupti?</p>

        <p class="blue_text">Tags</p>

    </div>

    <button id="Add_to_cart">Add to cart</button>

    <h1 class="blue_text_2">Comments</h1>

    <h3 class="blue_text_2">Write a comment / ask a question</h3>
    <textarea name="Comments" id="Comments" cols="30" rows="10"></textarea>

    <button id="to_top">Return to top</button>

</template>

<style scoped>
span{
    color: grey;
    font-weight: 400;
}

#NFT_img{
    width: 100%;
    height: 380px;
    border: thin black solid;
    border-top-left-radius:20PX;
    border-top-right-radius:20PX;
    margin-top:1em;
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
    background-color: #3670FA;
    color:white;
    padding:4em;
    padding-top:1em;
    padding-bottom:1em;
    border-style:none;
    border-radius:25px;
    display: block;
    margin: 0 auto;
    margin-top:1.5em;
    margin-bottom:1em;
}

textarea{
    width: 70%;
    border-style: none;
    border: thin solid rgb(199, 199, 199);
    border-radius:25px;
    display: block;
    margin: 0 auto;
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