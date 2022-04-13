<template>
    <div id="user-profile" class="mm">

        <div class="user-pp-container">
            <img class="user-p-photo" src="https://www.lego.com/cdn/cs/set/assets/blt167d8e20620e4817/DC_-_Character_-_Details_-_Sidekick-Standard_-_Batman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1" alt="no img">
        </div>

        <div class="user-details-container">
            <form @submit="onSubmit" id="" onsubmit="">
                <i class="fi fi-rr-edit" @click="editUserDetail_modal"></i>

                <div class="user-details">
                <h2>Details</h2>
                {{ activeUserID }}
                <label >{{ userData.name }}</label>
                <label>{{ userData.email }}</label>
                <label>{{ userData.password }}</label>
                </div>

                <div class="edit-user-details" :class="{hidden: hideState}">
                    <h2>Edit</h2>
                    <input type="text" v-model="username" id="user-name" name="user-name" placeholder="username">
                    <input type="e-mail" v-model="email" id="user-email" name="user-email" placeholder="email">
                    <input type="password" v-model="password" id="password" name="password" placeholder="password">

                    <div class="btn-container">
                       <button class="submit" type="submit">Done</button>
                    </div>
                </div>
                    
                    
                    <h3>ETH</h3>
                    
            </form>
        </div>
    </div>

    <div id="user-portfolio" class="mm">
        <h2>User Portfolio</h2>
        <div class="portfolio-container account-container">
            
        </div>
    </div>

    <div id="user-listings" class="mm">
        <h2>Listings</h2>
        <div class="listings-container account-container">
            <router-link to="/Listings"><i class="fi fi-rr-add account-item"></i></router-link>
            
        </div>
    </div>

    <div id="user-sold" class="mm">
        <h2>Sold Items</h2>
        <div class="sold-items-container account-container">
            
        </div>
    </div>

     <router-link to="../views/Onboarding">
        <div class="btn-container">
            <button class="submit" type="submit">Sign Out</button></div>
        
    </router-link>
</template>

<style scoped>
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
        /* align-items: center; */
    }
    .user-details-container{
        position: relative;
        width: 100%;
    }
    .user-details {
        display: flex;
        flex-direction: column;
    }
    .user-p-photo{
        height: 8rem;
        width: auto;
    }
    .user-pp-container {
        display: flex;
        justify-content: center;
        border-radius: 50%;
        margin-right: 1rem;
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
                username: '',
                email: '',
                password: '',
                hideState: true,
                userData: {

                },
                userListings: []
                };
        },



        
        methods: {
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

            async getUserDetails(){
                const response = await fetch('http://localhost:4000/users/get/' + this.activeUserID);
                const fetchedData = await response.json();
                this.userData = fetchedData;
                console.log(this.userData);
             },
        inject: ['activeUserID'],
        created() {
           this.getUserDetails()
           console.log(activeUserID)
        }
    }
}

</script>