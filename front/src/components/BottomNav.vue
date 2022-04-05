<template>
    <div class="bottom-nav-wrapper">
        <div class="bottom-nav">
            <router-link to="/"><i class="fi fi-rr-home current"></i></router-link>
            <router-link to="/Search"><i class="fi fi-rr-search"></i></router-link>
            <router-link><i class="fi fi-rr-add"></i></router-link>
            <router-link><i class="fi fi-rs-heart"></i></router-link>
            <router-link><i class="fi fi-rr-shopping-cart"></i></router-link>
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
        color: white;
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
</style>

<script>
export default {
    
}
</script>