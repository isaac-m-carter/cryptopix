<template>
    <div class="accountsLogo">
    <img src="./assets/Group53.svg" alt="" srcset="">
    <img src="./assets/CryptoPix.svg" alt="" srcset="">
</div>
<div class="imageShowcase">
 <img  class="imageShowcase1" src="../assets/Mask group.png" alt="" srcset="">
 <img src="../assets/Mask group-1.png" alt="" srcset="">
 <img class="imageShowcase1" src="../assets/Mask group-2.png" alt="" srcset="">
</div>
<div>
    <h2 class="h2Normal">
        A leading platform in <span class="h2Style">Buying, Selling</span> and  <span class="h2Style"> Discovery</span> of <span class="h2Style"> Quality</span> NFTS
    </h2>
</div>
<div class="buttonContainer">
    <router-link to="/SignUp">
    <div class="signUp">
        <h2>Sign up</h2>
    </div>
    </router-link>
    <div class="buttonSpace">
        <hr>
    </div>
    <router-link to="/Login">
    <div class="logIn">
        <h2>Log in</h2>
    </div>
    </router-link>
    <div class="forgotPassword">
        <p>Forgot password</p>
    </div>
    <router-link to="/">
    <div class="continueGuest">
        <h5>Continue as guest</h5>
    </div>
    </router-link>
</div>
</template>

<style scoped>
h5{
    text-align: center;
    text-decoration: underline;
    color:black;

}
.h2Normal{
    font-size: 22px;
}

.h2Style{
    color: #3670FA;
    font-size: 32px;

}

.imageShowcase{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0 16px 0;
}

.imageShowcase1{
    height: 224px;
}

.accountsLogo{
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 32px;
}

.signUp{
    height: 64px;
    border-radius: 32px;
    background-color: #3670FA;
    display: flex;
    justify-content: center;
}

.signUp h2{
    color: white;
}

.logIn{
    height: 64px;
    width: 100%;
    border: solid #3670FA;
    border-radius: 32px;
    border-width: 1px;
    display: flex;
    justify-content: center;
}

.logIn h2{
    color: #3670FA;
}

.buttonSpace{
    padding: 16px 0px 16px 0px;
}

.forgotPassword{
    padding-top: 16px;
    text-decoration-line: underline;
    font-size: 14px;
    text-align: center;
    color: rgb(66, 66, 66);
}

.continueGuest{
    font-size: 14px;
    text-align: center;
    color: grey;
}
</style>