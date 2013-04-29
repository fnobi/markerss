var routes = require('../routes'),
    should = require('should');

describe('routes', function () {
    var req, res;

    beforeEach(function () {
        req = {};
        res = {
            redirect: function () { },
            render : function () { }
        };
    });

    describe('index', function () {
        it('should display index with title', function (done) {
            res.render = function (view, vars) {
                view.should.equal('index');
                vars.title.should.eql('Express');
                done();
            };
            routes.index(req, res);
        });
    });

    describe('index', function () {
        it('should display index with title', function (done) {
            res.render = function (view, vars) {
                view.should.equal('index');
                vars.title.should.eql('Express');
                done();
            };
            routes.index(req, res);
        });
    });

});