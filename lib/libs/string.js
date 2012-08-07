var chars_all 	= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var chars_lower = "0123456789abcdefghiklmnopqrstuvwxyz";
var chars_upper = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
var chars_nums 	= "0123456789";
var chars_spec 	= "!@#$%^&*()_+-=?><:;[]{},.|";

/**
 * Generates a random string of the provided length, and including only
 * the required characters.
 *
 * @param {int} _string_length
 * @param {String} _mode
 * @api public
 */
function randomString(_string_length, _mode) {
    
    var string_length = _string_length;
    if(string_length < 3)
    	string_length = 2;
    
    var chars = chars_all;
    
    if(_mode === 'lower_case') chars = chars_lower;
    else if(_mode === 'upper_case') chars = chars_upper;
    else if(_mode === 'nums_oly') chars = chars_nums;
    else if(_mode === 'especials') chars = chars_all + chars_spec;
    
    var str = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        str += chars.substring(rnum,rnum+1);
    }
    
    return str;
}


/**
 * Generates a random key of the provided length, and including only
 * the required characters.
 * A key is separated by `-`.
 * Also has the option to timestamp the resulting string at the begining.
 *
 * @param {int} _numOfBlocks
 * @param {int} _blockLength
 * @param {String} _mode
 * @param {Boolean} _timestamp
 * @api public
 */
function randomKey(_numOfBlocks, _blockLength, _mode, _timestamp) {
	var numOfBlocks = _numOfBlocks;
    var blockLength = _blockLength;
    
    if(numOfBlocks === undefined || numOfBlocks < 3) numOfBlocks = 2;
    if(blockLength === undefined || blockLength < 3) blockLength = 2;
    
    var key = "";
    
	for (var i=0; i<numOfBlocks; i++) {
		if(key.length == 0)
			key = randomString(blockLength, _mode);
		else
			key = key + "-" + randomString(blockLength, _mode);
	}
	
	if(_timestamp !== undefined && _timestamp === true)
		key = new Date().getTime() + '-' + key;
	
	return key;
}


exports.randomString = randomString;
exports.randomKey = randomKey;

