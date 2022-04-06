const mongoose = require('mongoose');

const NftNicheSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true},
    seller_id: {
        type: String,
        required: true},
    buyer_id: {
        type: String,
        required: true},
    price: {
        type: String,
        required: true},
    description: {
        type: String,
        required: true},
    date: {
        type: Date,
        required: true},
    sold: {
        type: Boolean,
        required: true},
    clicks: {
        type: String,
        required: true},
    image: {
        type:String, //is this correct? https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
        required: true},
    tags: {
        type: String,
        required: true},
    commentmsg: {
        type: String,
        required: true},
        
});

const NftNiche = mongoose.model("NftNiche", NftNicheSchema);
module.exports=NftNiche