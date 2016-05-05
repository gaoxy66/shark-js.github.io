'use strict';

const cofse = require('co-fs-extra');
const path  = require('path');

module.exports = function *() {
	var srcPath     = this.getStorageValue('srcPath');
	var destPath    = this.getStorageValue('destPath');

	var paths = [
		'index.html',
		'media'
	].map(function(fileName) {
		return {
			src: path.join(srcPath, fileName),
			dest: path.join(destPath, fileName)
		}
	});

	for (let i = 0, len = paths.length; i < len; i += 1) {
		yield cofse.copy(paths[i].src, paths[i].dest);
	}
};
