'use strict';

var gulp = require('gulp');
var gamecoreTasks = require('gamecore-build');

gamecoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
