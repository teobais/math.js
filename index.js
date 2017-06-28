var constants = require('./lib/constants');

module.exports = {

    ceil: function(val) {
        return Math.ceil(val / 10) * 10;
    },

    round: function(n) {
        return Math.round(n);
    },

    fround: function(n) {
        return Math.fround(n)
    },

    /**
     * Returns the largest integer less than or equal to the given number.
     * @param n
     * @returns {number}
     */
    floor: function(n) {
        return Math.floor(n);
    },

    random: function() {
        return Math.random();
    },

    sign: function(n) {
        return Math.sign(n);
    },

    format: function(val, decimals) {
        return ( val.toFixed(decimals) )/1;
    },

    abs: function(n) {
        return Math.abs(n)
    },
    
    randomElement: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    imul: function(a, b) {
        return Math.imul(a, b);
    },
    
    minElement: function(arr) {
        return Math.min.apply(null, arr);
    },
    
    maxElement: function(arr) {
        return Math.max.apply(null, arr);
    },

    pow: function(base, exp) {
        return Math.pow(base, exp);
    },
    
    square: function(val) {
        return val * val;
    },
    
    cube: function(val) {
        return val * val * val;
    },

    sqrt: function(n) {
        return Math.sqrt(n);
    },

    cbrt: function (n) {
        return Math.cbrt(n);
    },

    exp: function (n) {
        return Math.exp(n);
    },

    expm1: function(n) {
        return Math.expm1(n);
    },

    hypot: function(...arr) {
        return Math.hypot(...arr);
    },
    
    between: function (val, min, max) {
        return min<=val==val<=max; 
    },

    trunc: function(n) {
        return Math.trunc(n);
    },

    greatestCommonDivisor: function gcd(x, y) {
        var remainder = x % y;
        if (remainder === 0) {
            return y;
        }

        return gcd(y, remainder);
    },

    isPrime: function(n) {
      for (var i = 2 ; i < n ; i++) {
          if (n % i === 0) {
              return false;
          }
      }
      return n > 1;
    },

    isEven: function(n) {
        return n % 2 === 0;
    },

    isOdd: function(n) {
        return !this.isEven(n);
    },
    
    toFahrenheit: function(val) {
        return val * 9/5 + 32;
    },
    
    toCelsius: function(val) {
        return (val - 32) * 5/9;
    },

    factorial: function(n) {
        return n * (n-1);
    },

    dropFirstDigit: function(n) {
        return Number(n.toString().substring(1));
    },

    dropLastDigit: function(n) {
        return Number(n.toString().substring(0, n.toString().length-1));
    },

    dropDigit: function(n, pos) {
        return Number(n.toString().substring(0, pos-1).concat(n.toString().substring(pos, n)));
    },

    log: function (n) {
        return Math.log(n);
    },

    log2: function (n) {
        return Math.log2(n);
    },

    log10: function (n) {
        return Math.log10(n);
    },

    log1p: function(n) {
        return Math.log1p(n);
    },

    // Unit converters
    yardsToFeet: function(n) {
        return n * constants.YARDS_TO_FEET_FACTOR;
    },

    feetToYards: function(n) {
        return n * constants.FEET_TO_YARDS_FACTOR;
    },

    yardsToInches: function(n) {
        return n * constants.YARDS_TO_INCHES_FACTOR;
    },

    inchesToYards: function(n) {
        return constants.INCHES_TO_YARDS_FACTOR * n;
    },

    inchesToMiles: function(n) {
        return constants.INCHES_TO_MILES_FACTOR * n;
    },

    feetToInches: function(n) {
        return constants.FEET_TO_INCHES_FACTOR * n;
    },

    feetToMeters: function (n) {
        return constants.FEET_TO_METERS_FACTOR * n;
    },

    feetToMiles: function(n) {
        return constants.FEET_TO_MILES_FACTOR * n;
    },

    inchesToFeet: function(n) {
        return constants.INCHES_TO_FEET_FACTOR * n;
    },

    inchesToMeters: function(n) {
        return constants.INCHES_TO_METERS_FACTOR * n;
    },

    milesToYards: function(n) {
        return constants.MILES_TO_YARDS_FACTOR * n;
    },

    milesToMeters: function(n) {
        return constants.MILES_TO_METERS_FACTOR * n;
    },

    milesToInches: function(n) {
        return constants.MILES_TO_INCHES_FACTOR * n;
    },

    milesToFeet: function(n) {
        return constants.MILES_TO_FEET_FACTOR * n;
    },

    yardsToMiles: function(n) {
        return constants.YARDS_TO_MILES_FACTOR * n;
    },

    yardsToMeters: function(n) {
        return constants.YARDS_TO_METERS_FACTOR * n;
    },

    // Trigonometric functions
    sin: function (n) {
        return Math.sin(n);
    },

    cos: function(n) {
        return Math.cos(n);
    },

    tan: function(n) {
        return Math.tan(n);
    },

    acos: function(n) {
        return Math.acos(n);
    },

    asin: function(n) {
        return Math.asin(n);
    },

    acosh: function(n) {
        return Math.acosh(n);
    },

    atan: function(n) {
        return Math.atan(n);
    },

    atan2: function(n) {
        return Math.atan2(n);
    }

};
