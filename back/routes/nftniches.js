const { response } = require("express");
const express = require("express");
const router = express.Router();

// below is where you edit variable names based on your variable/file structure names
const NftNiche = require("../models/nftniche");

// GET (all) NftNiches route
router.get('/', async (req, res) => {
    const nftniches = await NftNiche.find();
    res.json(nftniches)
});

// POST new NftNiche
router.post('/addnftniche', async (req, res) => {
    const newNftNiche = new NftNiche(req.body);
    // const newNftNiche = new NftNiche({
    //     product_name:"Healing Cells",
    //     seller_id:"Frontier Game",
    //     buyer_id:"None",
    //     price: 0.2,
    //     description:"Healing Cells have given a second chance to many fallen soldiers.",
    //     sold:false,
    //     clicks: 0,
    //     image: "https://s3-alpha-sig.figma.com/img/5e03/4445/8c9e3f7e60a3c938604b2fb1a452cfd8?Expires=1650240000&Signature=OYsM5W3Kc0ZBnKab5~s3U8QJWiIS7UuvLKCf3lmjO9FHXdXKbOOUvoJjEjH485fBFp3S3oWUExrY7tl2G8exFoiPRjrZ-egCBAVezsQPCw9ssdi4ji1WQgwtb5eQCixz1rOV26daDIaHmH59OvuWIZP8ONsMdS98CDHj0Tk6uwtga0F4czw4sUuS1dxry5KcwAjg~-10RKAbTJVE7KX5rL6VxyAGuSlAfuh0DxLrYmZk3enwqx5Bz7~mg2ecc-lExH6Qc~1jcsckIPu6DkUyo1fXPXFIYCHeWwkDXE0yum4Ky0uQ1xddYNER4s-FJ2QJqm7q4yWAucGKcWlSab5IIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    //     tags: "game",
    //     commentmsg: "None"
    // });
    const savedNftNiche = await newNftNiche.save()
    res.json(savedNftNiche)
});

// GET (single) NftNiche by ID
router.get('/get/:id', async (req, res) => {
    const IDed_NftNiche = await NftNiche.findById({ _id : req.params.id });
    res.json(IDed_NftNiche)
});

// DELETE a NftNiche by ID
router.delete('/delete/:id', async (req, res) => {
    const toDelete_NftNiche = await NftNiche.findByIdAndDelete({ _id : req.params.id });
    res.json(toDelete_NftNiche)
});

// UPDATE a NftNiche by ID
router.put('/update/:id', async (req, res) => {
    const toUpdate_NftNiche = await NftNiche.findByIdAndUpdate(
        { _id : req.params.id }, { $set: req.body }
    );
    res.json(toUpdate_NftNiche)
});

module.exports = router