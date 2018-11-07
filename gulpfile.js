'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./styles'));
});

gulp.task('sass-production', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./styles'));
});
 
gulp.task('watchsass', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

