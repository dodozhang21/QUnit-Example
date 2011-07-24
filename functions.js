function isEven(val) {
	return val % 2 === 0;
}

function startsWith(data, startsWithStr) {
	data = jQuery.trim(data);
	startsWithStr = jQuery.trim(startsWithStr);
	if(data) {
		return data.toUpperCase().lastIndexOf(startsWithStr.toUpperCase(), 0) === 0;
	} else if(data === startsWithStr) {
		return true;
	} else {
		return false;
	}
}