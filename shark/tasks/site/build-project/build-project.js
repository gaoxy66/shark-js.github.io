'use strict';

const cofse = require('co-fs-extra');

module.exports = function *() {
	yield this.runChildTask('site/copy-static');
	yield this.runChildTask('site/styl-to-css');
};
