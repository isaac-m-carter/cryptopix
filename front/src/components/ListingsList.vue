<template>


<div class="container">
    <div class="left"><img class="NFTImg" :src="NftObject.image" alt=""></div>
    <div class=" middle">Title: {{NftObject.product_name}} <br> Price: {{NftObject.price}}</div>  
    <!-- <div class="edit" ><i class="fi fi-rr-edit"></i></div>
    <div class="delete"><i class="fi fi-rr-trash"></i></div> -->
    
    <div class="edit" @click="updateEmit"><i class="fi fi-rr-edit"></i></div>
    <div class="delete" @click="delEmit"><i class="fi fi-rr-trash"></i></div>
</div>


</template>


<script>
    export default{
        methods:{
            delEmit(){
                this.$emit('delNftNicheEmit',this.NftObject._id)
            },
            updateEmit(){
                this.$emit('updNftNicheEmit',this.NftObject._id)
            }
        },
        emits:['delNftNicheEmit','updNftNicheEmit']
}
   

</script>


<style scoped>
.container{
     margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 20px;
    height:5em;
}

.left{
    width: 10em;
    border-radius:20px;
    justify-content: flex-start;
    height:5em;
}

.left img{
    object-fit: cover;
    border-radius:20px;
    width:10em;
    height:5em;
}

.middle{
    height:5em;
    line-height: 2.5em;
    font-weight: 700;
    overflow: hidden;
    color:black;
    font-size: 14px;

}

.edit{
    font-size:1.5em;
    color:#3670FA;
    cursor: pointer;
    padding:0;
}
.delete{
    font-size:1.5em;

    color:#3670FA;
    cursor: pointer;
    padding-right: 25px;
}


</style>



<script setup>
defineProps({
NftObject:{
    type:Object,
    required:true,
    },
});
</script>