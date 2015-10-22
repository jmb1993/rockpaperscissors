// AK's solution
function isPalindrome(str) {
	var s = str.toLowerCase().split(' ').join('');
	for (var i=0; i < s.length/2; i++) {
		if (s[i] != s[s.length - (i+1)]) {
      return false;
		}
	}
	return true;
}
