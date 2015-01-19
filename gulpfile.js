var gulp   = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');

var sync   = require('browser-sync');
var reload = sync.reload;


gulp.task('scripts', function () {
  return gulp.src('js/*.js')
    .pipe(concat('app.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('build/js/'));
});

gulp.task('styles', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(rename({suffix: '.min'}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix())
    .pipe(gulp.dest('build/css/'))
    .pipe(reload({stream: true}));
});

gulp.task('sync', function () {
  sync({
    server: { baseDir: "./" }
  });
});

gulp.task('default', ['scripts', 'styles', 'sync'], function () {
  gulp.watch('sass/*.scss', ['styles']);
});
