/* Converts each word in a string to Title Case */
/* parent object: String */
/* returns: String */
/* Support: Widely supported */
String.prototype.toTitleCase = function() {
	console.info('String.toTitleCase()');

	const a = this.toLowerCase().split(' ');
	const b = a.map(w => w.charAt(0).toUpperCase() + w.slice(1))
	
	return b.join(' ');
}