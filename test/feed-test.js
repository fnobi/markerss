var should = require('should'),
    Feed   = require('../models/Feed');

require('../lib/test')(['Feed']);

describe('feed', function () {
    var feed = new Feed({
        url: 'http://blog.fnobi.com/feeds/posts/default'
    });
});