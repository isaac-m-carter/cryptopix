<template>
    <span :class="{hidden : !activeUser}">Logged in as <br>{{userid}}</span>
    <div class="top-nav">
        <!-- <router-link to="/"><h4>Login/<br>Sign Up</h4></router-link> -->
        <router-link :class="{hidden : !activeUser}" to="/Notifications"><i class="fi fi-rs-bell"></i></router-link>
        <router-link :class="{hidden : !activeUser}" to="/Account"><i class="fi fi-sr-user"></i></router-link>
        <router-link :class="{hidden : activeUser}" to="/"><div id="signup-btn" class="submit"><h4>Sign Up</h4></div></router-link>
        <div @click="signOut" :class="{hidden : !activeUser}" to="/"><div class="submit"><h4>Sign Out</h4></div></div>
    </div>
    
        
    
</template>


<script>import { RouterLink } from "vue-router";

    export default{
        data() {
            return {
                userid: '',
                activeUser: false,
            }
        },
        methods: {
            verifyActiveUser() {
                if(this.userid.length <= 0) 
                    this.activeUser =!this.activeUser;
            },
            signOut() {
                // localStorage.clear('userid')
                this.$router.push('/Home');
            }
        },
        created() {  
            this.verifyActiveUser();
            this.userid = localStorage.getItem('userid')
        }
    }
</script>

<style scoped>

span{
    font-size: 10px;
        display: flex;
        text-align:end;
        position: fixed;
        top: 1rem;
        right: 1.5rem;
        z-index: 3;
}
.submit{
    text-decoration: none;
    border-radius: 20px;
    background: #3670FA;
    color:white;
    cursor: pointer;
    font-family: Montserrat;
    line-height:25px;
    height:25px;
     padding:0 10px;
     margin-left:1rem;
}
 h4 {
        margin: 0;
        text-align: center;
        font-size: 11pt;
        font-weight: 500;
    }
    .top-nav{
        display: flex;
        align-items: center;
        position: fixed;
        top: 3.1rem;
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

    .hidden{
        display: none;
    }
</style>