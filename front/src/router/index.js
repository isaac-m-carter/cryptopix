// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// App.vue will be redirected to linked components via <router-links>
// as a convention we will create new folder in 'src' named 'views' and place components to be linked in there
// components related to those links needs to be defined below both for import and routes[] array
import Home from '../views/Home.vue'
import Search from '../views/Results.vue'
import Listings from '../views/Listings.vue'
import Watchlist from '../views/Watchlist.vue'
import Cart from '../views/Cart.vue'
import Account from '../views/Account.vue'
import Notifications from '../views/Notifications.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Details from '../views/Details.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Details',
        name: 'Details',
        component: Details
    },
    {
        path: '/Search',
        name: 'Search', 
        component: Search
    },
    {
        path: '/Listings',
        name: 'Listings', 
        component: Listings
    },
    {
        path: '/Watchlist',
        name: 'Watchlist', 
        component: Watchlist
    },
    {
        path: '/Cart',
        name: 'Cart', 
        component: Cart
    },
    {
        path: '/Account',
        name: 'Account', 
        component: Account
    },
    {
        path: '/Notifications',
        name: 'Notifications', 
        component: Notifications
    },
    {
        path: '/Login',
        name: 'Login', 
        component: Login
    },
    {
        path: '/SignUp',
        name: 'SignUp', 
        component: SignUp
    }
]
// code below is NOT to be edited
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router