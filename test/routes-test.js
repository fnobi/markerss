var routes = require('../routes');

require('should');

describe('routes', function () {
    var req = {};
    var res = {
        redirect: function () { },
        render : function () { }
    };

    describe('index', function () {
        it('should display index with posts', function (done) {
            res.render = function (view, vars) {
                view.should.equal('index');
                vars.title.should.eql('Express');
                done();
            };
            routes.index(req, res);
        });
    });

});