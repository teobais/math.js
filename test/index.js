const assert = require('assert');
var math = require('../index'),
    ceil = math.ceil;

describe('#math.js', function() {
    it('converts 13 to 20', function() {
        assert.equal(ceil(13), 20 );
    });
    
    it('converts 111 to 120', function() {
        assert.equal(ceil(111), 120 );
    });
    
    it('leaves 90 as is', function() {
        assert.equal(ceil(90), 90 );
    });
});

   
