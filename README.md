# jMini Core
Core files for the jMini JS toolkit

jMini is a JavaScript toolbox for lightweight and efficient web development. It is aimed at supporting standards-compliant coding practices, and helps you to keep download size and general overhead minimal.

This repository contains the core jMini files. This is where new functions and objects can be contributed.

## Contribution Guide

If you would like to contribute a useful JS function, please create a pull request that contains:

* The actual JavaScript function in a human-readable form, and use the `.js` file ending.
* A minified version of the above with the file name ending in `.min.js`. Note that [MinifyJS](https://codebeautify.org/minify-js) can be helpful here, but always test that the minified version also passes all tests!
* A test file which tests all features and use-cases of the new function, ending in `.test.html`. Consider using the `$p.console` object for logging to screen.
* An updated `index.json` file with information about the new function.

Of course, for changes/bugfixes to existing files, you should just write what has changed and why to the pull request.
