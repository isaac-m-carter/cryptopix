<template>
    <!-- <a :href ="ArticleObject.url"> -->
    <div class="mainimage">
        <img class="NFTImg" :src="NftObject.urlToImage" alt=""> 
        <!-- a like button -->
    </div>
    
</template>

<style scoped>

</style>


<script setup>
defineProps({
NftObject:{
    type:Object,
    required:true,
    },
});
</script>