
<template>


<!--<div class="wrapper-tags"> 
<div v-for="NTFitem in NTFallinfo" :key="NTFitem._id">  
    <h3>{{NTFitem.tags}}</h3>  
</div>
</div> -->


<div  v-for="NTFitem in NTFallinfo" :key="NTFitem._id">
    <div class="viewcontainer">
    <h1>{{NTFitem.product_name}}</h1>
    <p>view all</p>
    </div>
    <div class="slideContainer">
    <img :src="NTFitem.image" alt="" class="content"> 
    <img :src="NTFitem.image" alt="" class="content"> 
    <img :src="NTFitem.image" alt="" class="content"> 
    <img :src="NTFitem.image" alt="" class="content">
    <img :src="NTFitem.image" alt="" class="content"> 
    </div>
</div>


<!-- <div class="slideContainer">
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
</div> -->


</template>

<script>

export default{
    data(){
        return{
            fakeNTFitem: {
                _id:'1',
                product_name: 'NTF name', 
                seller_id: '00', 
                buyer_id: '00', 
                price: 2, 
                description:'description words', 
                date: '', 
                sold: false,
                clicks:3, 
                image: 'https://cdn.vox-cdn.com/thumbor/UBw6FphB7vxtWsbQGnmjxZgCCoA=/0x0:1252x974/1120x0/filters:focal(0x0:1252x974):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22341171/Screen_Shot_2021_03_02_at_3.21.50_PM.png', tags: '',
                commentmsg:'awesome!'},
        
            NTFallinfo : []
        };
    },
    methods:{
        async fetchAPI(){
            const response = await fetch('http://localhost:4000/nftniches/');
            const fetchedData = await response.json();
            this.NTFallinfo= fetchedData;
        }
    },
    created(){
       // this.fetchAPI();
       this.NTFallinfo = [this.fakeNTFitem,this.fakeNTFitem,this.fakeNTFitem,this.fakeNTFitem,this.fakeNTFitem,this.fakeNTFitem];
    }
}

</script>

<style scoped>
.content{
    background-color: #3670FA;
    margin: 2px;
    min-width: 200px;
    height: 200px;
}

.slideContainer{
    display: flex;
    overflow: scroll;
}
.viewcontainer{
    display: flex;
    justify-content: space-between;
}
</style>
