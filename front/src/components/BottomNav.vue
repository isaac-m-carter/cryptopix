<template>
    <div class="bottom-nav-wrapper">
        <div class="bottom-nav">
            <router-link to="/"><i class="fi fi-rr-home"></i></router-link>
            <router-link to="/Search"><i class="fi fi-rr-search"></i></router-link>
            <router-link to="/Listings"><i class="fi fi-rr-add"></i></router-link>
            <router-link to="/Watchlist"><i class="fi fi-rr-heart"></i></router-link>
            <router-link to="/Cart"><i class="fi fi-rr-shopping-cart"></i></router-link>
        </div>
    </div>
</template>

<style scoped>
.bottom-nav-wrapper{
    position: fixed;
    bottom: 0.5rem;
    display: flex;
    z-index: 2;
    width: 90%;
}

.bottom-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3670FA;
    width: 63vh;
    height: 5rem;
    border-radius: 40px;
    padding: 0 .5rem;
    
}

.fi{
    color: #fff;
    font-size: 1.5rem;
    margin: 0 1.2rem;
}

.current{
    color: #3670FA;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 40px;
    margin: -.2rem;
}


a{
    text-decoration: none;
}

i{
    display: flex;
}

</style>

<script>
 export default {
    // data() {
    // } 
}

</script>