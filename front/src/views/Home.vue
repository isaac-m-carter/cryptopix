<script setup>
import CreatorsVue from '../components/home/Creators.vue';
import FilterVue from '../components/home/Filter.vue';
</script>

<script>
export default {
    data(){
        return{
            filterTags:{
                allItems:false,
                artFiltered:false,
                gameFiltered:false,
                photoFiltered:false,
                musicFiltered:false
            }
        }
    }
}
</script>

<template>
    
    <h3>HOME</h3>
        
    <div class="wrapper-tags"> 
        <p class="tags_item" :class="{tag_selected: filterTags.allItems}" @click="filterTags.allItems= !filterTags.allItems">All Items</p>
        <p class="tags_item" :class="{tag_selected: filterTags.artFiltered}" @click="filterTags.artFiltered= !filterTags.artFiltered">Art</p>
        <p class="tags_item" :class="{tag_selected: filterTags.gameFiltered}" @click="filterTags.gameFiltered= !filterTags.gameFiltered">Game</p>
        <p class="tags_item" :class="{tag_selected: filterTags.photoFiltered}" @click="filterTags.photoFiltered= !filterTags.photoFiltered">Photography</p>
        <p class="tags_item" :class="{tag_selected: filterTags.musicFiltered}" @click="filterTags.musicFiltered= !filterTags.musicFiltered">Musician</p>
    </div>

    <!-- <CreatorsVue /> -->
</template>

<style>
    .home-toggle{
    color: #3670FA;
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 40px;
    margin: .4rem;
}
.tags_item{
    background-color: #515661;
    border-radius: 14px;
   padding: 6px;
   color: white;
    
}
.tag_selected{
    background-color: #3772FF;
}
.wrapper-tags{
    display: flex;
    justify-content: space-between;
}
</style>
