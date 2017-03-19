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
    
    describe("Testing array functions", function() {
        it("true scenario", function() {
            expect([1,2,3,4,5]).toContain( math.randomElement([1,2,3,4,5]) );
        });
        
        it("false scenario", function() {
            expect([534,34,435]).not.toContain( math.randomElement([1,2,3,4,5]) );
        });
        
        it("100 should be the max of [1, 2, 100]", function() {
            expect(math.maxElement([1,2,100])).toEqual(100);
        });
        
        it("-10 should be the min of [1, -10, 10, 100]", function() {
            expect(math.minElement([1, -10, 10, 100])).toEqual(-10);
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
    });
    
    describe("Testing between function", function() {
        it("4 is out of [7,10]", function() {
            expect(math.between(4, 7, 10)).toBeFalsy();
        });
        
        it("4 is in [4,10]", function() {
            expect(math.between(4, 4, 10)).toBeTruthy();
        });
        
        it("4 is in [3,10]", function() {
            expect(math.between(4, 3, 10)).toBeTruthy();
        });
    });
    
    describe("Testing temperature functions", function() {
        it("37°C is 98.6°F", function() {
            expect(math.toFahrenheit(37)).toEqual(98.6);
        });
        
        it("98.6°F is 37°C", function() {
            expect(math.toCelsius(98.6)).toEqual(37);
        });
        
    });

    describe("Testing greatestCommonDivisor function", function() {
        it("GCD of 2 and 6 is 2", function () {
            expect(math.greatestCommonDivisor(2, 6)).toEqual(2);
        });

        it("GCD of 72 and 24 is 24", function () {
            expect(math.greatestCommonDivisor(72, 24)).toEqual(24);
        });
    });


    describe("Testing factorial function", function() {
        it("factorial of 3 is 6", function() {
            expect(math.factorial(3)).toEqual(6);
        });
        it("factorial of 5 is 20", function() {
            expect(math.factorial(5)).toEqual(20);
        });
        it("factorial of 6 is 120", function() {
            expect(math.factorial(5)).toEqual(20);
        });
        it("factorial of 15 is not 20", function() {
            expect(math.factorial(15)).toNotBe(20);
        });
    });

    describe("Testing prime function", function() {
        it("37 is prime", function() {
            expect(math.isPrime(37)).toBeTruthy();
        });
        it("36 is not prime", function() {
            expect(math.isPrime(36)).toBeFalsy();
        });
    });

    describe("Testing even function", function() {
        it("42 is even", function() {
            expect(math.isEven(42)).toBeTruthy();
        });
        it("31 is not even", function() {
            expect(math.isEven(31)).toBeFalsy();
        });
    });

    describe("Testing odd function", function() {
        it("7 is even", function() {
            expect(math.isOdd(7)).toBeTruthy();
        });
        it("14 is not even", function() {
            expect(math.isOdd(14)).toBeFalsy();
        });
    });

    describe("Testing log functions", function() {
        it("Common log tests", function() {
            expect(math.log(-1)).toBeNaN();
            expect(math.log(1)).toEqual(0);
            expect(math.log(10)).toEqual(2.302585092994046);
            expect(math.log(0)).toBeNegativeInfinity();
        });
        it("Common log2 tests", function() {
            expect(math.log2(3)).toEqual(1.584962500721156);
            expect(math.log2(2)).toEqual(1);
            expect(math.log2(1)).toEqual(0);
            expect(math.log2(0)).toBeNegativeInfinity();
            expect(math.log2(-2)).toBeNaN();
            expect(math.log2(1024)).toEqual(10);
        });
        it("Common log10 tests", function() {
            expect(math.log10(2)).toEqual(0.3010299956639812);
            expect(math.log10(1)).toEqual(0);
            expect(math.log10(0)).toBeNegativeInfinity();
            expect(math.log10(-2)).toBeNaN();
            expect(math.log10(100000)).toEqual(5);
        });

    });
    
});

   
