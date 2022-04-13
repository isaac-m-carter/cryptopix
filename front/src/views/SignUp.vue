<template>

    <div class="accountsLogo">
    <img src="../assets/cryptopix-logo/Group53.svg" alt="" srcset="">
    <img src="../assets/cryptopix-logo/CryptoPix.svg" alt="" srcset="">
</div>
    <div id="signUpHeader">
        <h3>Enter Your Details</h3>
    </div>

    <div class="signup-container">
    <form id="createAccount" action="" method="get">
        
            <label for="uname">Username</label><br>
            <input v-model="inputUserData.username" class="SignUpFormC" type="text" placeholder="Username" name="uname" required>
        
        
            <label for="psw">Password</label><br>
            <input v-model="inputUserData.password" class="SignUpFormC" type="password" placeholder="Password" name="psw" required>
        
        
            <label for="email">Email</label><br>
            <input v-model="inputUserData.email" class="SignUpFormC" type="text" placeholder="Email" name="email" required>
        
        
            <label for="cemail">Confirm Email</label><br>
            <input class="SignUpFormC" type="text" placeholder="Confirm Email" name="cemail">
            
            <div class="submit">
            <button @click="addUser" class="signUpButton" type="submit">Sign Up</button>
            </div>

        
        <router-link to= "/">
            <h5>Skip to Home Page</h5>
        </router-link>
    </form>
    </div>
</template>

 <script>
 export default{
    data(){
        return{
            usersData:[],
            inputUserData:{
               username:'',
               password:'',
               email:'',
               cart:[],
               sell:[],
            }
        };
    },
    methods:{
        async addUser(){
            const response = await fetch('http://localhost:4000/users/adduser',
            { 
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.inputUserData)
                });
            const fetchedData = await response.json();
            this.$emit('userCreated', fetchedData._id)

            this.$router.push('/Login');
        }
    },
    emits: ['userCreated']
}
</script>


<style scoped>

.accountsLogo{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding-top: 34px;
}

h5{
    text-align: center;
    text-decoration: underline;
    color:black;

}

.signup-container input, .signup-container textarea{
    margin: 20px 0;
    border: 1px solid rgba(54, 112, 250, 0.3);
    border-radius: 20px;
    height: 38px;
    line-height: 38px;
    font-family: Montserrat;
    padding-left:5px;
}

.signup-container label{
    color: #3670FA;
    font-family: Montserrat;
    width:100%;
    font-weight: 600;
}

.signup-container input, .signup-container textarea{
    font-family: Montserrat;
    width:100%;
}

.signUpButton{
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

.signUpButton:hover{
    background: white;
   border: 1px solid #3670FA;
   color:#3670FA;
}

#signUpHeader{
    text-align: center;
    font-family: Montserrat;
    margin: 50px;
}

.submit{
    text-align: center;
    margin-top: 40px;
}
</style>