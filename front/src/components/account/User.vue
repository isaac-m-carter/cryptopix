<template>
    <div id="user-profile" class="mm">
        <div>
            <img class="user-p-photo" src="https://i.stack.imgur.com/5Kgaq.jpg?s=192&g=1" alt="no img">
        </div>

        <div class="user-details">
             <h2>Details</h2>
             <h3>name</h3>
             <h3>email</h3>
             <h3>password</h3>
             <h3>ETH</h3>
        </div>
    </div>

    <div id="user-portfolio" class="mm">
        <h2>User Portfolio</h2>
    </div>

    <div id="user-listings" class="mm">
        <h2>Listings</h2>
    </div>

    <div id="user-sold" class="mm">
        <h2>Sold Items</h2>
    </div>
</template>

<style scoped>

    #user-profile{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .user-details{
        width: 100%;
    }

    .user-p-photo{
        height: 8rem;
        border-radius: 50%;
        margin-right: 1rem;
    }

    h2{
        color: #3670FA;
        font-weight: 600;
        font-size: 13pt;
        margin: 0;
        margin-bottom: .5rem;
        line-height: 140%;
        border-bottom: 2px solid #3670FA;
    }

    h3{
        font-weight: 500;
        font-size: 12pt;
        margin: 0;
        padding: .25em;
        line-height: 140%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .mm{
        margin-bottom: 1.5rem;
    }
</style>