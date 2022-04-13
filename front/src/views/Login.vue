<template>

    <div class="accountsLogo">
    <img src="../assets/cryptopix-logo/Group53.svg" alt="" srcset="">
    <img src="../assets/cryptopix-logo/CryptoPix.svg" alt="" srcset="">
</div>
<div>
    <div id="logInHeader">
        <h3>Log In</h3>
    </div>
    <form @submit.prevent="handleSubmit" class="logInForm" action="" method="">
        <div class="logInForm_C">

            <label for="uname">User ID</label><br>
            <input class="logInForm_C" type="text" v-model="userid" placeholder="Enter id" name="uname">
        </div>
        <div class="logInForm_C">
            <label for="psw">Password</label><br>
            <input class="logInForm_C" type="password" v-model="password" placeholder="Enter Password" name="psw">
            <p class="warning" :class="{visible: wrongPass}">* Wrong Password, please try again</p>
        </div>

        
        <div class="submit">
        <button class="LogInForm_Button" type="submit">Login</button>
        </div>
        
        <router-link to= "/">
            <h5>Skip to Home Page</h5>
        </router-link>
    </form>
</div>
</template>

<style scoped>
.warning{
    display: none;
    color: red;
}
.visible{
    display: block !important;
}
.accountsLogo{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 64px;
}


h5{
    text-align: center;
    text-decoration: underline;
    color:black;

}

.logInForm input{
        margin: 20px 0;
    border: 1px solid rgba(54, 112, 250, 0.3);
    border-radius: 20px;
    height: 38px;
    line-height: 38px;
    font-family: Montserrat;
    padding-left:5px;
    width:100%;
}

.logInForm label{
    color: #3670FA;
    font-family: Montserrat;
    width:100%;
    font-weight: 600;
}


.LogInForm_Button{
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

.LogInForm_Button:hover{
    background: white;
   border: 1px solid #3670FA;
   color:#3670FA;
}

#logInHeader{
    text-align: center;
    font-family: Montserrat;
}

.submit{
    text-align: center;
    margin-top: 40px;
}
</style>>

<script>
    export default{
        data() {
            return {
                userid: '',
                password: '',
                wrongPass: false
            }
        },

        methods: {
            async handleSubmit(){
            const response = await fetch('http://localhost:4000/users/get/' + this.userid);
            const fetchedData = await response.json();
            console.log(fetchedData);
            if(this.password != fetchedData.password)
                this.wrongPass = true;
            else    
                {
                    this.$emit('userCreated', this.userid);
                    this.$router.push('/');
                }
            }
        },
        inject: ['activeUserID'],

        created() {
                this.userid = this.activeUserID._value
        }
    }
</script>
