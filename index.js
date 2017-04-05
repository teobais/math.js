module.exports = {

    ceil: function(val) {
        return Math.ceil(val / 10) * 10;
    },
    
    format: function(val, decimals) {
        return ( val.toFixed(decimals) )/1;
    },
    
    randomElement: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    
    minElement: function(arr) {
        return Math.min.apply(null, arr);
    },
    
    maxElement: function(arr) {
        return Math.max.apply(null, arr);
    },
    
    square: function(val) {
        return val * val;
    },
    
    cube: function(val) {
        return val * val * val;
    },
    
    between: function (val, min, max) {
        return min<=val==val<=max; 
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

    log: function (n) {
        return Math.log(n);
    },


    log2: function (n) {
        return Math.log2(n);
    },

    log10: function (n) {
        return Math.log10(n);
    },

    // Unit converters
    yardsToFeet: function(n) {
        return n * 3;
    },

    feetToYards: function(n) {
        return (1 / 3) * n;
    },

    yardsToInches: function(n) {
        return n * 36;
    },

    inchesToYards: function(n) {
        return 1 / 36 * n;
    },

    feetToInches: function(n) {
        return 12 * n;
    },

    inchesToFeet: function(n) {
        return 1 / 12 * n;
    },

    inchesToCentimeters: function(n) {
        return 2.54 * n;
    },

    centimetersToInches: function(n) {
        return 1 / 2.54 * n;
    },

    milesToYards: function(n) {
        return 1760 * n;
    },

    milesToMeters: function(n) {
        return 1609.344 * n;
    },

    milesToInches: function(n) {
        return 63360 * n;
    },

    yardsToMiles: function(n) {
        return 1 / 1760 * n;
    },

    yardsToMeters: function(n) {
        return 0.9144 * n;
    }

};
