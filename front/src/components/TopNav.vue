<template>
    <div class="top-nav">
        <router-link to="/Onboarding"><h4>Login/<br>Sign Up</h4></router-link>
        <router-link to="/Notifications"><i class="fi fi-rs-bell"></i></router-link>
        <router-link to="/Account"><i class="fi fi-sr-user"></i></router-link>
    </div>
</template>

<style scoped>
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
        font-size: 1.5rem;
        margin-left: 1rem;
    }

    .fi-sr-user{
        color: #fff;
        background-color: #000;
        padding: 5px 5px 0 5px;
        border-radius: 40px;
    }

    a{
        text-decoration: none;
        height: auto;
    }

    h4 {
        margin: 0;
        text-align: center;
        font-size: 10pt;
    }

    a:visited {
        color: #3670FA;
    }
</style>