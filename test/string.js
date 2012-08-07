var libs = require('../lib/libs.js');

console.log("\nLibs Module Test and Basic Usage!\n");

console.log("String Library");
console.log("randomString (chars_all): " + libs.string.randomString(10) );
console.log("randomString (lower_case): " + libs.string.randomString(10, 'lower_case') );
console.log("randomString (upper_case): " + libs.string.randomString(10, 'upper_case') );
console.log("randomString (nums_oly): " + libs.string.randomString(10, 'nums_oly') );
console.log("randomString (especials): " + libs.string.randomString(10, 'especials') );
console.log("randomKey: " + libs.string.randomKey(4,4) );
console.log("randomKey (lower_case): " + libs.string.randomKey(4,4, 'lower_case') );
console.log("randomKey (upper_case): " + libs.string.randomKey(4,4, 'upper_case') );
console.log("randomKey (nums_oly): " + libs.string.randomKey(4,4, 'nums_oly') );
console.log("randomKey (especials): " + libs.string.randomKey(4,4, 'especials') );
console.log("randomKey (no timestamp): " + libs.string.randomKey(4,4, '', false) );
console.log("randomKey (timestamp): " + libs.string.randomKey(4,4, '', true) );
console.log( (new Date().getTime() ) );

console.log("\n");
