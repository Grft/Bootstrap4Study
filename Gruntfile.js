'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });
    grunt.registerTask('default', ['browserSync']);
};