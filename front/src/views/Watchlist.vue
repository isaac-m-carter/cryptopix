<template>
    <h1>Watchlist</h1>
    <div v-for="NTFitem in NTFallinfo" :key="NTFitem._id">  
    <div class="liked">{{NTFitem.cart}}</div>  
</div>
</template>

<script>

export default{
    data(){
        return{
           
        
            NTFallinfo : []
        };
    },
    methods:{
        async fetchAPI(){
            const response = await fetch('http://localhost:4000/users/');
            const fetchedData = await response.json();
            this.NTFallinfo= fetchedData;
        }
    },
    created(){
       this.fetchAPI();
     
    }
}

</script>