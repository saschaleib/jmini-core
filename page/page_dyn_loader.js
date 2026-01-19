/* Page Dyn frameword core */
/* Authors:
    - Sascha Leib <ad@hominem.info>
 */
/* This project is licensed under the terms of the MIT license. */
$p.dyn.loader = {

	/* shadow init function */
	_init: function(p) {
		console.log('$p.dyn.loader._init()');
		
		// register the action handler:
		$p.dyn.action.register('load-page-content', this._load);
	},

	/* load the content, as specified by the JSON snippet */
	_load: function(e, json) {
		console.log('$p.dyn.loader.loadSnippet()');
		console.log(json);
		
		// make sure the "from" path ends with a slash:
		const base = ( json.from ? json.from : location.pathname.substring(0, location.pathname.lastIndexOf('/')) + '/' );
		
		// make sure we have an element (fallback is <div>):
		const elem = ( json.element ? json.element : 'div' );
		
		
	}
}