var should   = require('should'),
    mongoose = require('mongoose'),
    User     = require('../models/User'),
    Feed     = require('../models/Feed');

require('../lib/test')([ 'User', 'Feed' ]);

describe('User', function () {
    it('can save', function (done) {
        var userName = 'hoge';
        var user = new User({ name: userName });

        user.save(function (err) {
            should.not.exist(err);

            User.findOne({
                name: userName
            }, function (err, doc) {
                should.not.exist(err);
                doc.name.should.equal(user.name);
                done();
            });
        });
    });

    it('required name', function () {
        var user = new User();
        user.save(function (err) {
            should.exist(err);
        });
    });
});