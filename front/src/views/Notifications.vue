<template>
      <div class="accountsLogo">
    <img src="./assets/cryptopix-logo/Group53.svg" alt="" srcset="">
    <img src="./assets/cryptopix-logo/CryptoPix.svg" alt="" srcset="">
</div>
<div class="enterDetails">
    <div id="signUpHeader">
        <h3>Enter you details</h3>
    </div>
    <form class="createAccount" action="" method="get">
        <div class="SignUpFormC">
            <input class="SignUpFormC" type="text" v-model="userBody.username" placeholder="Username" required>
        </div>
        <span>{{userBody.username}}</span>
        <div class="SignUpFormC">
            <input class="SignUpFormC" type="password" v-model="userBody.password" placeholder="Password" name="psw" required>
        </div>
        <span>{{userBody.password}}</span>
        <div class="SignUpFormC">
            <input class="SignUpFormC" type="text" v-model="userBody.email" placeholder="Email" name="uname" required>
        </div>
        <span>{{userBody.email}}</span>
        <div class="SignUpFormC">
            <input class="SignUpFormC" type="text" placeholder="Confirm Email" name="uname" required>
        </div>
        <div class="SignUpFormC">
            <input class="SignUpFormC" type="text" placeholder="Phone" name="uname" required>
        </div>
        <div class="SignUpFormC">
            <button class="signUpButton" type="submit">Sign Up</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
  data(){
      return{
            userBody:{
            username:'',
            password:'',
            email:'',
            cart:[],
            sell:[]
      }
  }
},
methods:{
        //functions here
    },
    created(){
        //code that runs the momemnt this component is on
    }
}
</script>

<style scoped>

.logInLogoParent{
    position: relative;
    margin-bottom: 100px;
}
 
 .accountsLogo{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 64px;
}


.SignUpFormC{
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #3670FA;
    height: 58px;
    width: 100%;
    margin-top: 16px ;
    border-radius: 32px;
}


.signUpButton{
    background-color: #3670FA;
    border: none;
    height: 64px;
    width: 100%;
    margin-top: 16px ;
    border-radius: 32px;
    color: white;
}

#signUpHeader{
    text-align: center;
    font-family: sans-serif;
}

</style>