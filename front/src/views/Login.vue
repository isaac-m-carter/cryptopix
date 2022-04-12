<template>
    <div class="accountsLogo">
    <img src="./assets/Group53.svg" alt="" srcset="">
    <img src="./assets/CryptoPix.svg" alt="" srcset="">
</div>
<div>
    <div id="logInHeader">
        <h3>Log In</h3>
    </div>
    <form @submit="handleSubmit" class="logInForm" action="" method="">
        <div class="logInForm_C">
            <label for="uname"><b></b></label>
            <input class="logInForm_C" type="text" v-model="userid" placeholder="Enter id" name="uname">
        </div>
        <div class="logInForm_C">
            <label for="psw"><b></b></label>
            <input class="logInForm_C" type="password" v-model="password" placeholder="Enter Password" name="psw">
        </div>
        <div class="logInForm_C">
           <button class="LogInForm_Button" type="submit">Login</button>
        </div>
    </form>
</div>
</template>

<style scoped>
.accountsLogo{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 64px;
}

.logInForm{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.logInForm_C{
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #3670FA;
    height: 58px;
    margin-top: 16px;
    width: 100%;
    border-radius: 32px;
}

.LogInForm_Button{
    background-color: #3670FA;
    border: none;
    height: 64px;
    margin-top: 16px;
    width: 100%;
    border-radius: 32px;
    color: white;
}

#logInHeader{
    text-align: center;
    font-family: sans-serif;
}
</style>

<script>
    export default{
        data() {
            return {
                userid: '',
                password: ''
            }
        },

        // methods: {
        //     async handleSubmit(){
        //     const response = await fetch('http://localhost:4000/users/get/:id');
        //     const fetchedData = await response.json();
        //     this.usersData = fetchedData;
        //     console.log(fetchedData);
        // },
        // emits: ['userCreated'],

        inject: ['activeUserID'],

        created() {
            this.userid = this.activeUserID;
        }
    }
    
</script>