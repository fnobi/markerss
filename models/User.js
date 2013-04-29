var mongoose = require('mongoose'),
    Feed     = require('./Feed');

var User = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    feed: [ mongoose.Schema.Types.Feed ]
});

module.exports = mongoose.model('User', User);