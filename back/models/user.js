const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true},
    password: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true},
    cart: {
        type: Array,
        required: true},
    sell: {
        type: Array,
        required: true}
    
});

const User = mongoose.model("User", UserSchema);
module.exports=User