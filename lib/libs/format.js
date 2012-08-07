var _df = require('dateformat');

/**
 * Returns a string in currency format of the provided number 
 * and symbol.
 *
 * @param {Number} _num
 * @param {String} _symbol
 * @api public
 */
function currency(_num, _symbol) {
    if(_symbol === undefined)
    	_symbol = "$";
    
    return _symbol + decimal(_num, 2);
}

/**
 * Returns a string of a number with the given presicion.
 *
 * @param {Number} _num
 * @param {int} _precision
 * @api public
 */
function decimal(_num, _precision) {

	// If _num is undefined, assing 0	
	if(_num === undefined) _num = 0;
	
	// If _precision is undefined, assigned 2
	if(_precision === undefined) _num = 2;

    n = Math.abs(_num);
    
    var sign = '';
    if(_num < 0)
    	sign = '-';
    	
    return sign + n.toFixed(_precision);
}



function fileSize(_bytes) {
    
}

exports.fileSize = fileSize;
exports.currency = currency;
exports.decimal = decimal;

