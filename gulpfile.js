var gulp   = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
  return gulp.src('js/*.js')
    .pipe(concat('app.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify('last 2 versions', '> 5% in US'))
      .pipe(gulp.dest('build/js/'));
});

gulp.task('styles', function () {
  return gulp.src('sass/app.scss')
    .pipe(rename({suffix: '.min'}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('default', ['scripts', 'styles']);
