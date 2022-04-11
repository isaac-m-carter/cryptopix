<template>
    <div id="user-profile" class="mm">
        <div>
            <img class="user-p-photo" src="https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1" alt="no img">
        </div>

        <div class="user-details">
            <i class="fi fi-rr-edit" @click="editUserDetail_modal"></i>
             <h2>Details</h2>
             <h3 v-bind="name">name</h3>
             <h3 v-bind="email">email</h3>
             <h3 v-bind="pasword">password</h3>
             <h3>ETH</h3>
             <div class="edit-user-details" :class="{hidden: hideState}">
                <i class="fi fi-rr-checkbox" @click="editUserDetail_modal"></i>
                <h2>Edit</h2>

                <form action="" id="edit-details" method="PUT">

                    <input type="text" v-model="username" id="user-name" name="user-name" placeholder="Name">
                    <input type="e-mail" v-model="email" id="user-email" name="user-email" placeholder="Email">
                    <input type="password" v-model="password" id="password" name="password" placeholder="Password">

                     <div class="btn-container">
                        <button class="submit" type="submit">Done</button>
                     </div>
                </form>
             </div>
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

    <router-link to="../views/SignUp">
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
        align-items: center;
    }

    .user-details{
        position: relative;
        width: 100%;
    }

    .user-p-photo{
        height: 8rem;
        border-radius: 50%;
        margin-right: 1rem;
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

    h2{
        color: #3670FA;
        font-weight: 600;
        font-size: 13pt;
        margin: 0;
        margin-bottom: .5rem;
        line-height: 140%;
        border-bottom: 2px solid #3670FA;
    }

    h3, input{
        font-weight: 500;
        font-size: 12pt;
        margin: 0;
        padding: .25em;
        line-height: 140%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    input{
        font-style: italic;
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

    .submit:hover {
        background: white;
        border: 1px solid #3670FA;
        color:#3670FA;
}

    .btn-container{
        display: flex;
        justify-content: center;
    }
</style>

<script>
    export default{
        data() {
            return {
                username: '',
                email: '',
                password: '',
                hideState: true
                };
        },
        methods: {
            editUserDetail_modal() {
                this.hideState = !this.hideState;
            }
        }
    }

</script>