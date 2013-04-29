process.env.NODE_ENV = 'test';

var mongoose = require('mongoose'),
    config   = require('config'),
    async    = require('async');

require('should');

var test = function (initModels) {
    before(function (done) {
        async.series([function (next) {
            mongoose.connect(config.db.url, next);
        }, function (next) {
            async.forEach(initModels || [], function (model, next) {
                mongoose.model(model).remove(next);
            }, next);
        }], done);
    });
};

module.exports = test;