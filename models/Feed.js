var mongoose = require('mongoose');

var Feed = new mongoose.Schema({
    url: String
});

module.exports = mongoose.model('Feed', Feed);