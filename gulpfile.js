'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
    var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });

});

gulp.task('default', gulp.parallel('browser-sync', function (){}));