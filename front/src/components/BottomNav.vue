<template>
    <div class="bottom-nav-wrapper">
        <div class="bottom-nav">
            <router-link to="/"><i class="fi fi-rr-home current"></i></router-link>
            <router-link to="/Results"><i class="fi fi-rr-search"></i></router-link>
            <router-link to="/Listings"><i class="fi fi-rr-add"></i></router-link>
            <router-link to="/Watchlist"><i class="fi fi-rr-heart"></i></router-link>
            <router-link to="/Cart"><i class="fi fi-rr-shopping-cart"></i></router-link>
        </div>
    </div>
</template>

<style scoped>
.bottom-nav-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: .5rem;
    position: fixed;
    background-color: #3670FA;
    width: 95%;
    height: 5.2rem;
    border-radius: 40px;
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
    margin: .4rem;
}

a{
    text-decoration: none;
}

</style>