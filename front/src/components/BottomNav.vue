<template>
    <div class="bottom-nav-wrapper">
        <div class="bottom-nav">
            <router-link to="/"><i @click="home_toggle" :class="{current: home_active}" class="fi fi-rr-home"></i></router-link>
            <router-link to="/Search"><i @click="search_toggle" :class="{current: search_active}" class="fi fi-rr-search"></i></router-link>
            <router-link to="/Listings"><i @click="add_toggle" :class="{current: add_active}" class="fi fi-rr-add"></i></router-link>
            <router-link to="/Watchlist"><i @click="favourite_toggle" :class="{current: favourite_active}" class="fi fi-rr-heart"></i></router-link>
            <router-link to="/Cart"><i @click="cart_toggle" :class="{current: cart_active}" class="fi fi-rr-shopping-cart"></i></router-link>
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
// export default {
//   data() {
//         return {
//             home_active: false,
//             search_active: false,
//             add_active: false,
//             favourite_active: false,
//             cart_active: false,
//         };
//     },
//     methods: {

//         home_toggle() {
//             this.home_active = !this.home_active;
//         },

//         search_toggle() {
//             this.search_active = !this.search_active;
//             resetAll();
//         },
        
//         add_toggle() {
//             this.add_active = !this.add_active;
//             resetAll();
            
//         },
//         favourite_toggle() {
//             this.favourite_active = !this.favourite_active;
//             resetAll();
            
//         },
//         cart_toggle() {
//             this.cart_active = !this.cart_active;
//             resetAll();
            
//         },
//         resetAll(){
//             this.home_active = false;
//             this.search_active = false;
//             this.add_active = false;
//             this.favourite_active = false;
//             this.cart_active = false;
//         }

//     },
// }  

</script>