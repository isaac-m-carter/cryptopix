const mongoose = require('mongoose');

const NftNicheSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true},
    seller_id: {
        type: String,
        required: true},
    buyer_id: {
        type: String},
    price: {
        type: Number,
        required: true},
    description: {
        type: String,
        required: true},
    sold: {
        type: Boolean},
    clicks: {
        type: Number},
    image: {
        type:String, //is this correct? https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
        required: true},
    tags: {
        type: Object,
        required: true},
    commentmsg: {
        type: Array},
    like:{
        type:Boolean},
});

const NftNiche = mongoose.model("NftNiche", NftNicheSchema);
module.exports=NftNiche