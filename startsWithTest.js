$(document).ready(function(){

	module("startsWithTest");

	test('startsWith', function() { 
		ok(startsWith("ll-925", "ll-"), 'Starts with ll-'); 
		ok(!startsWith("ll-925", "xl-"), 'Does not start with xl-'); 
		ok(!startsWith("", "xx-"), 'Does not start with xx-'); 
		ok(startsWith(" xx-sdgj ", "xx-"), 'Trimming test: starts with xx-'); 
		ok(startsWith(" xx-sdgj", " xx- "), 'Trimming test 2: starts with xx-'); 
		ok(startsWith("", " "), 'Empty string starts with empty string'); 
//		raises(startsWith(foo, " "), 'Undefined test 1');  // undefined is obviously not considered a normal exception
	}) 

});