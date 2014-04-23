$(document).on('ready', function() {
	// 1. create a function 'palindrome' that takes a single string parameter and returns true 
	// if the parameter is a palindrome and false if it is not
});
var palindrome = function(str) {
		reverseStr = str.split('').reverse().join('');
		var results= str === reverseStr ? "This is a palindrome" : "This is not a palindrome";
		return results;
};