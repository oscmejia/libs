var libs = require('../lib/libs.js');

console.log("\nLibs Module Test and Basic Usage!\n");

console.log("Format Library");
console.log("decimal: " + libs.format.decimal() );
console.log("decimal: " + libs.format.decimal(undefined,2) );
console.log("decimal: " + libs.format.decimal(null,3) );

console.log("decimal: " + libs.format.decimal(32.09876, 3) );
console.log("decimal: " + libs.format.decimal(-32.09876, 3) );

console.log("currency: " + libs.format.currency(-132.09876) );
console.log("currency: " + libs.format.currency(100) );
console.log("currency: " + libs.format.currency(0) );
console.log("currency: " + libs.format.currency(0, '$ ') );
console.log("currency: " + libs.format.currency(100.990992893, 'U$') );
console.log("\n");



