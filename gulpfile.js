var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  return gulp.src('app/main.ts')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});