<template>

    <!-- <span>{{ activeUserID.value }}</span> -->

    <div id="user-profile" class="mm">
        
        <div class="user-pp-container">
            <img class="user-p-photo" src="https://www.lego.com/cdn/cs/set/assets/blt167d8e20620e4817/DC_-_Character_-_Details_-_Sidekick-Standard_-_Batman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1" alt="no img">
        </div>

        <div class="user-details-container">
            <form @submit.prevent="onSubmit" id="edit-details" onsubmit="">
                <div>
                    <i class="fi fi-rr-edit" @click="editUserDetail_modal"></i>
                <h2>Details</h2>
                </div>

                <div class="user-details">
                    <label>{{userid.name}}</label>
                    <label>email</label>
                    <label for="password"></label>
                </div>

                <div class="edit-user-details"  >
                    <i class="fi fi-rr-edit" @click="editUserDetail_modal"></i>
                    <h2>Details</h2>
                    <input type="text" v-model="username" id="user-name" name="user-name" placeholder="name">
                    <input type="e-mail" v-model="email" id="user-email" name="user-email" placeholder="email">
                    <input type="password" v-model="password" id="password" name="password" placeholder="password">
                
                <!-- <div class="btn-container">
                    <button class="submit" type="submit">Done</button>
                </div> -->
                </div>
     

                
                <h3>ETH</h3>
            </form>
        </div>
    </div>

    <!-- <div id="user-portfolio" class="mm">
        <h2>User Portfolio</h2>
        <div class="portfolio-container account-container">
            
        </div>
    </div> -->

    <div id="user-listings" class="mm">
        <h2>Listings</h2>
        <div class="listings-container account-container">
            <router-link to="/Listings"><i class="fi fi-rr-add account-item"></i></router-link>
            
        </div>
    </div>

    <!--<div id="user-sold" class="mm">
        <h2>Sold Items</h2>
        <div class="sold-items-container account-container">
           
        </div>
    </div>


      <router-link to="../views/Onboarding">

     <router-link to="../views/Home">

        <div class="btn-container">
            <button class="submit" type="submit">Sign Out</button></div>
        
    </router-link> -->
</template>

<style scoped>
    form{
        width: 100%;
    }

    .edit-user-details{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #fff;
        top: 0;
    }

    #user-profile{
        display: flex;
        flex-direction: row;
    }

    .user-details{
        display: flex;
        position: absolute;
        flex-direction: column;
        position: relative;
        width: 100%;
    }

    .user-details-container {
        display: flex;
        position: relative;
        min-width: 55%;
    }

    .user-p-photo{
        height: 10rem;
        width: auto;
    }

    .user-pp-container {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 1rem;
        height: 8rem;
        overflow: hidden;
    }

    .account-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .account-item{
        display: flex;
        padding: .58rem;
    }

    h2, span{
        color: #3670FA;
        font-weight: 600;
        font-size: 13pt;
        margin: 0;
        margin-bottom: .5rem;
        line-height: 140%;
        border-bottom: 2px solid #3670FA;
    }

    h3, input, label{
        font-weight: 500;
        font-size: 12pt;
        margin: 0;
        padding: .25em;
        line-height: 140%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    input{
        /* font-style: italic; */
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        width: 10rem;
    }

    .mm{
        margin-bottom: 1.5rem;
    }

    .fi{
        color: #3670FA;
        font-size: 34pt;
    }

    .fi-rr-edit, .fi-rr-checkbox{
        position: absolute;
        right: 0;
        font-size: 20px;
    }

    i{
        display: flex;
    }

    .submit{
        text-decoration: none;
        height: 2rem;
        width: 7rem;
        border-radius: 20px;
        background: #3670FA;
        color:white;
        border: 1px solid transparent;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        margin-top: .5rem;
}

    .submit:active {
        background: white;
        border: 1px solid #3670FA;
        color:#3670FA;
}

    .btn-container{
       display: flex;
       justify-content: center;
    }

    #sign-out {
        position: absolute;
        top: 1.6rem;
        right: 8rem;
        margin: .25rem;
        font-size: 12pt;
        /* padding-bottom: .rem; */
    }


</style>

<script>
    export default{
        data() {
            return {
                userid: '',
                username: '',
                email: '',
                password: '',
                hideState: true,
                details: '',
                userListings: []
                };
        },
       
        methods: {
            async userDetails(){
            const response = await fetch('http://localhost:4000/users/get/' + this.userid);
            const fetchedData = await response.json();
            console.log();

            this.username = fetchedData.username;
            this.email = fetchedData.email;
            this.password = fetchedData.password;
            
            },
            async addUserListing(listing){
            const response = await fetch('http://localhost:4000/users/update/:id',
            { 
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(listing)
                });

            const data = await response.json();
            }, 
            
            editUserDetail_modal() {
                this.hideState = !this.hideState;
            },
            
                            // GET all data
            async fetchAPI(){
                const response = await fetch('http://localhost:4000/nftniches/');
                const fetchedData = await response.json();
                this.nftnichesData = fetchedData;
                console.log(fetchedData);
            },
                    // GET one item with ID
            async getNftNicheFunc(nftnicheID){
                const fetchURL = 'http://localhost:4000/nftniches/get/'+nftnicheID;
                console.log(fetchURL);
                const response = await fetch(fetchURL);
                const fetchedData = await response.json(); 
                console.log(fetchedData);
            },
                    // DELETE one item with ID
            async delNftNicheFunc(nftnicheID){
                const fetchURL = 'http://localhost:4000/nftniches/delete/'+nftnicheID;
                console.log(fetchURL);
                const response = await fetch(fetchURL, { method:"DELETE"});
                const fetchedData = await response.json(); 
                console.log(fetchedData);
            },
                    // UPDATE one item with ID (requires providing BODY of data)
            async updateNftNicheFunc(nftnicheID){
                const fetchURL = 'http://localhost:4000/nftniches/update/'+nftnicheID;
                console.log(fetchURL);
                const response = await fetch(fetchURL, 
                    { 
                    method:"PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.newNftNicheInfo)
                    });
                const fetchedData = await response.json();  
                console.log(fetchedData);
            },
        },

        created(){

            // this.userid = this.activeUserID;
         
            this.userid = localStorage.getItem("userid");
            
            this.userDetails();
        }
    }

</script>