<template>


<div class="User_comments">
        <!-- <div class="Profile_img"></div> -->
        <h5>User#1373</h5>
        <p>{{NftObject.commentmsg}}</p>
</div>


</template>

<style scoped>
.User_comments{
    padding: 2em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 20px;
    height:auto;
}

.User_comments h5{
    margin: 0 1.5em;
    color:#3670FA;
}

.User_comments p{
    color:black;
    margin: 0 1.5em;
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