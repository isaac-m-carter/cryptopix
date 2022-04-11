<template>
    <div>
    <div id="signUpHeader">
        <h3>Enter you details</h3>
    </div>
    <form class="createAccount" action="" method="get">
        <div class="SignUpFormC">
            <label for="uname"><b></b></label>
            <input class="SignUpFormC" type="text" placeholder="Username" name="uname" required>
        </div>
        <div class="SignUpFormC">
            <label for="psw"><b></b></label>
            <input class="SignUpFormC" type="password" placeholder="Password" name="psw" required>
        </div>
        <div class="SignUpFormC">
            <label for="uname"><b></b></label>
            <input class="SignUpFormC" type="text" placeholder="Email" name="uname" required>
        </div>
        <div class="SignUpFormC">
            <label for="uname"><b></b></label>
            <input class="SignUpFormC" type="text" placeholder="Confirm Email" name="uname" required>
        </div>
        <div class="SignUpFormC">
            <label for="uname"><b></b></label>
            <input class="SignUpFormC" type="text" placeholder="Phone" name="uname" required>
        </div>
        <div class="SignUpFormC">
            <button class="signUpButton" type="submit">Sign Up</button>
        </div>
    </form>
</div>
</template>

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