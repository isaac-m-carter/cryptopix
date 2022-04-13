<template>
    <div class="top-nav">
        
        <router-link to="/Notifications"><i class="fi fi-rs-bell"></i></router-link>
        <router-link to="/Account"><i class="fi fi-sr-user"></i></router-link>
        <router-link to="/Onboarding"><div class="submit"><h4>Sign Out</h4></div></router-link>
    </div>
</template>

<style scoped>

.submit{
    text-decoration: none;
    border-radius: 20px;
    background: black;
    color:white;
    
    font-family: Montserrat;
    line-height:25px;
    height:25px;
     padding:0 6px;
     margin-left:1rem;
}
 h4 {
        margin: 0;
        text-align: center;
        font-size: 15px;
    }
    .top-nav{
        display: flex;
        align-items: center;
        position: fixed;
        top: 2rem;
        right: 1.5rem;
        z-index: 3;
        
    }

    .fi{
        color: #000;
        font-size: 25px;
        margin-left: 1rem;
    }

    .fi-sr-user{
        color: #fff;
        background-color: #000;
        font-size:20px;
        padding: 5px 5px 0 5px;
        border-radius: 40px;
    }

    a{
        text-decoration: none;
        height: auto;
    }


    a:visited {
        color: #3670FA;
    }
</style>