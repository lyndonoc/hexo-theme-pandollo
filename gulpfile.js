const gulp = require('gulp');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {

  return gulp
    .src('./source/scss/main.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoPrefixer())
    .pipe(gulp.dest('./source/css'));

});

gulp.task('default', ['sass'], function () {

  gulp.watch('./source/scss/**/*.scss', ['sass']);

});
