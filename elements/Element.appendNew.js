/* appends a new child HTMLElement to the parent. */
/* parent object: HTMLElement */
/* parameter: name (String) name of the new child element (required) */
/* parameter: att (Object) name of the new child element (optional) */
/* parameter: sub (String|HTMLElement|Array of HTMLElement) add as child/content of the element (optional) */
/* returns: the (modified) parent object */
/* Requires: HTMLElement.new (static) */
HTMLElement.prototype.appendNew = function(n, att = undefined, sub = undefined) {
	var e = null;
	try {
		e = HTMLElement.new(n, att, sub);
		this.appendChild(e);
	} catch(err) {
		if ($p && $p.console) $p.console.error(err.toString());
		console.error(err);
	}
	return e;
}