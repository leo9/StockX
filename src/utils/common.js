var round2Digit = function(num){
	return Math.round(num * 100) / 100;
};

var checkValidSize = function(size){
	if (!size || isNaN(size) || !Number.isInteger(Number(size)) || Number(size) < 1 || Number(size) > 5){
	    return false;
	}

	return true;
};

module.exports = {
	round2Digit: round2Digit,
	checkValidSize: checkValidSize,
};

