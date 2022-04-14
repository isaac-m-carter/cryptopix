<template>


<div class="User_comments">
        <!-- <div class="Profile_img"></div> -->
        <h5>{{commentBody.user_id}}</h5>
        <p>{{commentBody.message_body}}</p>
        
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


<script>
export default {
    data(){
        return{
            commentBody:{
                user_id:'',
                message_body:''
            }
        }
    },
    methods:{
            //get comment id
            async getCommentbyID(){
                const fetchURL = 'http://localhost:4000/comments/get/'+this.commentID;
                console.log(fetchURL);
                const response = await fetch(fetchURL);
                const fetchedData = await response.json();
                this.commentBody = fetchedData;
            },
    },
    created(){
            this.getCommentbyID();
    }
}
</script>

<script setup>
defineProps({
commentID:{
    type:String,
    required:true,
    },
});
</script>