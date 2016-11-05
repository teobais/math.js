const assert = require('assert');
var math = require('../index');

describe('#math.js', function() {
    
    describe("Testing ceil function", function () {
        it('converts 13 to 20', function() {
            assert.equal(math.ceil(13), 20 );
        });
    
        it('converts 111 to 120', function() {
            assert.equal(math.ceil(111), 120 );
        });
    
        it('leaves 90 as is', function() {
            assert.equal(math.ceil(90), 90 );
        }); 
    });
    
    
    describe("Testing format function", function() {
        it('2 decimals', function() {
            assert.equal(math.format(4.66364, 2), 4.66 );
        });
        
        it('1 decimal', function() {
            assert.equal(math.format(4.66364, 1), 4.7 );
        });
        
        it('1 decimal', function() {
            assert.equal(math.format(1.23e-10, 1), 0.0 );
        });
        
    })
    
});

   
