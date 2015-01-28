'use strict';

const path  = require('path');

const shark = require('shark-core')({
	tasksPath:  path.join(__dirname, './shark/tasks'),
	srcPath:    path.join(__dirname, './src'),
	destPath:   path.join(__dirname, './build')
});

module.exports = shark;