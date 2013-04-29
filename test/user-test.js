var mongoose = require('mongoose'),
    User     = require('../models/User');

require('should');
require('../lib/test')(['User']);

describe('User', function () {
    it('add his feed', function () {
        var user = new User();
    });
});