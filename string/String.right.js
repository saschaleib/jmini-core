/* Returns the n rightmost characters in a string
 * parent object: String
 * parameter: n = number of characters (required)
 * parameter: pad = padding character if string is less then n long (optional)
 * returns: String
 * Support: Widely supported */
String.prototype.right = function(n, pad = undefined) {
	console.info('"'+this.toString()+'".right('+n+',"'+pad+'")');

	let r = ( n > this.length ? this.toString() : this.slice(-n));

	if (pad && r.length < n) {
		r = pad.repeat(n - r.length) + r;
	}
	return r;
}