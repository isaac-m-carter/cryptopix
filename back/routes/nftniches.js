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
    //     product_name:"DeadFellaz #8563",
    //     seller_id:"DeadFellaz",
    //     buyer_id:"None",
    //     price: 0.3,
    //     description:"Each unique Deadfella is randomly generated from a combination of over 400 individually drawn traits",
    //     sold:false,
    //     clicks: 20,
    //     image: "https://drive.google.com/file/d/1xiX92Na6_LNd5NZC_oWM4plDEJwFbzJK/view?usp=sharing",
    //     tags: "art",
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