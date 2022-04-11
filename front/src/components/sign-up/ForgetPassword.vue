<template>
    <div class="accountsLogo">
    <img src="./assets/Group53.svg" alt="" srcset="">
    <img src="./assets/CryptoPix.svg" alt="" srcset="">
</div>
<div>
    <div id="lostPassHeader">
        <h3>Lost Password?</h3>
    </div>
    <form class="lostPassForm" action="" method="get">
        <div class="lostPassForm_C">
            <label for="uname"><b></b></label>
            <input class="lostPassForm_C" type="text" placeholder="Username" name="uname" required>
        </div>
        <div class="lostPassForm_C">
            <label for="psw"><b></b></label>
            <input class="lostPassForm_C" type="password" placeholder="Email" name="psw" required>
        </div>
        <div class="lostPassForm_C">
            <button class="LostPass_Button" type="submit">Reset</button>
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

.lostPassForm{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.lostPassForm_C{
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: #3670FA;
    height: 58px;
    margin-top: 16px;
    width: 100%;
    border-radius: 32px;
}

.LostPass_Button{
    background-color: #3670FA;
    border: none;
    height: 64px;
    margin-top: 16px;
    width: 100%;
    border-radius: 32px;
    color: white;
}

#lostPassHeader{
    text-align: center;
    font-family: sans-serif;
}
</style>