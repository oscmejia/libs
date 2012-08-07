var libs = require('../lib/libs.js');

console.log("\nLibs Module Test and Basic Usage!\n");

console.log("Number Library");
console.log("randomNumber (0): " + libs.number.random(0) );
console.log("randomNumber (1): " + libs.number.random(1) );
console.log("randomNumber (2): " + libs.number.random(2) );
console.log("randomNumber (3): " + libs.number.random(3) );
console.log("randomNumber (4): " + libs.number.random(4) );
console.log("randomNumber (5): " + libs.number.random(5) );
console.log("randomNumber (10): " + libs.number.random(10) );
console.log("randomNumber (20): " + libs.number.random(20) );
console.log("randomBetween 11, 33: " + libs.number.randomBetween(11, 33) );
console.log("randomBetween 0, 10: " + libs.number.randomBetween(0, 10) );
console.log("randomBetween 2, 5: " + libs.number.randomBetween(2, 5) );

