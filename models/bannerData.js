const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    imageURL: String,
    title: String,
    description: String
});

module.exports = mongoose.model('bannerData', schema);