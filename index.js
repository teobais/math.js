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
    
    square: function(val) {
        return val * val;
    },
    
    cube: function(val) {
        return val * val * val;
    },
    
    between: function (val, min, max) {
        return min<=val==val<=max; 
    }

}
