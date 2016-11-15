var math = require('../index');

describe('#math.js', function() {
    
    describe("Testing ceil function", function () {
        it('converts 13 to 20', function() {
            expect(math.ceil(13)).toEqual(20);
        });

        it('converts 111 to 120', function() {
            expect(math.ceil(111)).toEqual(120);
        });
    
        it('leaves 90 as is', function() {
            expect(math.ceil(90)).toEqual(90);
        }); 
    });
    
    describe("Testing format function", function() {
        it('2 decimals', function() {
            expect(math.format(4.66364, 2)).toEqual(4.66);
        });
        
        it('1 decimal', function() {
            expect(math.format(4.66364, 1)).toEqual(4.7);
        });
        
        it('1 decimal', function() {
            expect(math.format(1.23e-10, 1)).toEqual(0.0);
        });
    });
    
    describe("Testing randomElement function", function() {
        it("true scenario", function() {
            expect([1,2,3,4,5]).toContain( math.randomElement([1,2,3,4,5]) );
        });
        
        it("false scenario", function() {
            expect([534,34,435]).not.toContain( math.randomElement([1,2,3,4,5]) );
        });
    });
    
    describe("Testing square function", function() {
        it("square of 3", function() {
            expect(math.square(3)).toEqual(9);
        });
        
        it("square of 15", function() {
            expect(math.square(15)).toEqual(225);
        });
    });
    
    describe("Testing cube function", function() {
        it("cube of 3", function() {
            expect(math.cube(3)).toEqual(27);
        });
        
        it("cube of 0", function() {
            expect(math.cube(0)).toEqual(0);
        });
    })
    
    
});

   
