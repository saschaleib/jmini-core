/* Appends a new text node to the end of the child nodes list of an element */
/* parameter: (required) text to add */
/* parent object: HTMLElement */
/* returns: the (modified) parent object */
/* Support: DOM Level 1 (1998) */
HTMLElement.prototype.appendText = function(txt) {
	this.append(document.createTextNode(txt));
	return this;
}