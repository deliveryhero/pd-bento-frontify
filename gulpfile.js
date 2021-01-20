'use strict';

// SASS
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/main.scss', ['sass']);
});


// JS
var bundle = require('gulp-bundle-file');
 
gulp.task('js', function() {
    return gulp.src('./js/*.bundle')
        .pipe(bundle.concat())
        .pipe(gulp.dest('./build'));
});