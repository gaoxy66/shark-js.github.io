'use strict';

const path                      = require('path');
const Tree                      = require('shark-tree');
const StylusTransformer         = require('shark-transformer-stylus');
const AutoprefixerTransformer   = require('shark-transformer-autoprefixer');

module.exports = function *() {
	var files       = {};
	var destPath    = path.join(this.getStorageValue('destPath'), 'css/all.css');
	var srcPath     = path.join(this.getStorageValue('srcPath'), 'styl/all.styl');

	files[destPath] = srcPath;
	var tree = yield Tree(files, this.logger);

	tree = yield StylusTransformer.treeToTree(tree, this.logger);
	tree = yield AutoprefixerTransformer.treeToTree(tree, this.logger);

	yield tree.writeContentToFiles();
};
