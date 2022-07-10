const express = require("express");
const router = express.Router();
const BannerContent = require('../models/bannerData');

/**
 * Endpoint to get the banner list
 * */
router.get('/banners', async (req, res) => {
    try {
        const bannerData = await BannerContent.find();
        res.json(bannerData);
    } catch (error) {
        res.send(error)
    }
});

router.post('/banners', async (req, res) => {
    try {
        const banner = new BannerContent ({
            imageURL: req.body.imageURL,
            title: req.body.title,
            description: req.body.description
        });

        const bannerPostResult = await banner.save();
        res.json(banner);
    } catch (error) {
        res.send(error)
    }
});



module.exports = router;