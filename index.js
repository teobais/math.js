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
    
    toFahrenheit: function(val) {
        return val * 9/5 + 32;
    },
    
    toCelsius: function(val) {
        return (val - 32) * 5/9;
    },

    factorial: function f(n) {
        return n * (n-1);
    }

};
