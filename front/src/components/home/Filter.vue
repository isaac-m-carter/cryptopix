
<template>

</template>
<script>
export default{
    data(){
        return{
            usersData:[],
            inputUserData:{
                fname:'',
                lname:'',
                email:'',
                password:''
            },
             NTFallinfo : []
        };
    },
    methods:{
        async fetchAPI(){
            const response = await fetch('http://localhost:4000/users/');
            const fetchedData = await response.json();
            this.usersData = fetchedData;
        },
        async addUser(){
            const response = await fetch('http://localhost:4000/users/adduser',
            { 
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.inputUserData)
                });
            const fetchedData = await response.json();
            this.fetchAPI();
        },
        async delUser(userID){
            const fetchURL = 'http://localhost:4000/users/delete/' + userID;
            const response = await fetch(fetchURL,{ method:"DELETE" });
            const fetchedData = await response.json();
            this.fetchAPI();
        },
        async updateUser(userID){
            const fetchURL = 'http://localhost:4000/users/update/' + userID;
            const response = await fetch(fetchURL,
            { 
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.inputUserData)
                });
            const fetchedData = await response.json();
            this.fetchAPI();
        }
    },
    created(){
        this.fetchAPI();
    }
}
</script>
<script setup>
import userVue from './user.vue'
</script>
<style scoped>
span{
    background-color: blueviolet;
}
</style>