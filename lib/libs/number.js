/**
 * Generates a random number of the provided length
 *
 * @param {int} _length
 * @api public
 */
 function random(_length) {
    
    var string_length = _length;
    if(string_length < 0)
    	string_length = 1;
    	
    var chars = "0123456789";
    
    var num = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        num += chars.substring(rnum,rnum+1);
    }
    return num*1;
}


/** Generates a random number between two numbers
 *
 * @param {int} _min
 * @param {int} _max
 * @api public
 */
function randomBetween(_min, _max) {
	var max, min;
	
	if(_min > _max){
		min = _max;	
		max = _min;
	}
	else if(_min === _max){
		return _min;
	}
	else{
		max = _max;
		min = _min;
	}
    
    var r = Math.floor(Math.random() * max) + min;
    
    if(r > max)
    	return max;
    if(r < min)
    	return min;
    else
    	return r;
}

exports.random = random;
exports.randomBetween = randomBetween;
