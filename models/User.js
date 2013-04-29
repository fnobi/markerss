var mongoose = require('mongoose'),
    Feed     = require('./Feed');

var User = new mongoose.Schema({
    name: String,
    feed: [Feed]
});

module.exports = mongoose.model('User', User);