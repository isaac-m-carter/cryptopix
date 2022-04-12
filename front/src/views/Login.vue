<template>
    <div class="accountsLogo">
    <img src="./assets/Group53.svg" alt="" srcset="">
    <img src="./assets/CryptoPix.svg" alt="" srcset="">
</div>
<div>
    <div id="logInHeader">
        <h3>Log In</h3>
    </div>
    <form @submit="handleSubmit" class="logInForm" action="" method="get">
        <div class="logInForm_C">
            <label for="uname"><b></b></label>
            <input class="logInForm_C" type="text" placeholder="Enter Username" name="uname" required>
        </div>
        <div class="logInForm_C">
            <label for="psw"><b></b></label>
            <input class="logInForm_C" type="password" placeholder="Enter Password" name="psw" required>
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
        methods: {
            handleSubmit() {
                e.preventDefault()
                console.log('submitted')
            }
        }
    }