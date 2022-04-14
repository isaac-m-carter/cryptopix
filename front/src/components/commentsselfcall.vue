<script setup>
defineProps({
commentID:{
    type:String,
    required:true,
    },
});
</script>

<template>
    <h3>comment's ID: {{commentID}}</h3>
</template>