module.exports = {

    ceil: function(val) {
        return Math.ceil(val / 10) * 10;
    },
    format: function(val, decimals) {
        return val.toFixed(decimals);
    }  

}
