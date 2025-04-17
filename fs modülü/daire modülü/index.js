// index.js

const { circleArea, circleCircumference } = require('./circle');

const r = 5;

console.log(`Yarıçapı ${r} olan dairenin alanı: ${circleArea(r).toFixed(2)}`);
console.log(`Yarıçapı ${r} olan dairenin çevresi: ${circleCircumference(r).toFixed(2)}`);
