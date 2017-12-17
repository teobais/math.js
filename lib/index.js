const trig = require('./trigonometric');
const unit = require('./unit');
const arithmetic = require('./arithmetic');
const probability = require('./probability');
const utils = require('./utils');
const stat = require('./statistics');

module.exports = Object.assign(trig, unit, arithmetic, probability, utils, stat);
