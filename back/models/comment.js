const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true},
    message_body: {
        type: String,
        required: true}
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports=Comment