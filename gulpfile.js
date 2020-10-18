'use strict';

const server = require("browser-sync").create();
const {dest, src, series, parallel} = require('gulp');
const del = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');
const cleanCss = require('gulp-clean-css');
const flatmap = require('gulp-flatmap');
const htmlmin = require('gulp-htmlmin');

function browserSync(cb) {
    var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
    ];

    server.init(files, {
        server: {
            baseDir: "./"
        }
    });

    cb();
};

function clean(cb) {
    return src('./dist/', {
        read: false,
        allowEmpty: true
    })
        .pipe(del());

    cb();
};

function copyfonts(cb) {
    src('./node_modules/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(dest('./dist/fonts'));

    cb();
};

function imageMin(cb) {
    return src('img/*.{png,jpg,gif}')
        .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(dest('dist/img'));

    cb();
};

function useMin(cb) {
    return src('./*.html')
        .pipe(flatmap(function (stream, file) {
            return stream
                .pipe(usemin({
                    css: [rev()],
                    html: [function () {
                        return htmlmin({collapseWhitespace: true})
                    }],
                    js: [uglify(), rev()],
                    inlinejs: [uglify()],
                    inlinecss: [cleanCss(), 'concat']
                }))
        }))
        .pipe(dest('dist/'));

    cb();
};

exports.build = series(clean, copyfonts, imageMin, useMin);

exports.default = parallel(browserSync);