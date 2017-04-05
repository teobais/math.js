var math = require('../index');

describe('#math.js', function() {

    it("Testing ceil function", function () {
        expect(math.ceil(13)).toEqual(20);
        expect(math.ceil(111)).toEqual(120);
        expect(math.ceil(90)).toEqual(90);
    });

    it("Testing format function", function() {
        expect(math.format(4.66364, 2)).toEqual(4.66);
        expect(math.format(4.66364, 1)).toEqual(4.7);
        expect(math.format(1.23e-10, 1)).toEqual(0.0);
    });

    it("Testing array functions", function() {
        expect([1,2,3,4,5]).toContain( math.randomElement([1,2,3,4,5]) );
        expect([534,34,435]).not.toContain( math.randomElement([1,2,3,4,5]) );
        expect(math.maxElement([1,2,100])).toEqual(100);
        expect(math.minElement([1, -10, 10, 100])).toEqual(-10);
    });

    it("Testing square function", function() {
        expect(math.square(3)).toEqual(9);
        expect(math.square(15)).toEqual(225);
    });

    it("Testing cube function", function() {
        expect(math.cube(3)).toEqual(27);
        expect(math.cube(0)).toEqual(0);
    });

    it("Testing between function", function() {
        expect(math.between(4, 7, 10)).toBeFalsy();
        expect(math.between(4, 4, 10)).toBeTruthy();
        expect(math.between(4, 3, 10)).toBeTruthy();
    });

    it("Testing temperature functions", function() {
        expect(math.toFahrenheit(37)).toEqual(98.6);
        expect(math.toCelsius(98.6)).toEqual(37);
    });

    it("Testing greatestCommonDivisor function", function() {
        expect(math.greatestCommonDivisor(2, 6)).toEqual(2);
        expect(math.greatestCommonDivisor(72, 24)).toEqual(24);
    });

    it("Testing factorial function", function() {
        expect(math.factorial(3)).toEqual(6);
        expect(math.factorial(5)).toEqual(20);
        expect(math.factorial(5)).toEqual(20);
        expect(math.factorial(15)).toNotBe(20);
    });

    it("Testing prime function", function() {
        expect(math.isPrime(37)).toBeTruthy();
        expect(math.isPrime(36)).toBeFalsy();
    });

    it("Testing even function", function() {
        expect(math.isEven(42)).toBeTruthy();
        expect(math.isEven(31)).toBeFalsy();
    });

    it("Testing odd function", function() {
        expect(math.isOdd(7)).toBeTruthy();
        expect(math.isOdd(14)).toBeFalsy();
    });

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

    it("Testing unit converters", function() {
        expect(math.yardsToFeet(3)).toEqual(9);
        expect(math.feetToYards(123)).toEqual(41);
        expect(math.yardsToInches(42)).toEqual(1512);
        expect(math.inchesToYards(42)).toBeCloseTo(1.17, 0);
        expect(math.feetToInches(3)).toEqual(36);
        expect(math.inchesToCentimeters(42)).toEqual(106.68);
        expect(math.centimetersToInches(42)).toBeCloseTo(16.54, 0);
        expect(math.inchesToFeet(42)).toEqual(3.5);
        expect(math.milesToYards(42)).toEqual(73920);
        expect(math.milesToMeters(11)).toBeCloseTo(17702.8, 0);
        expect(math.yardsToMiles(42)).toBeCloseTo(0.024, 0);
        expect(math.yardsToMeters(42)).toBeCloseTo(38.4048, 0);
        expect(math.milesToInches(0.5)).toEqual(31680);
    });

});


