// LOAD
var gulp = require("gulp"),
  util = require("gulp-util"),
  sass = require("gulp-sass"),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  del = require('del'),
  watch = require('gulp-watch'),
  log = util.log;

// TASKS

// Build CSS
gulp.task("sass", function(){
  log("Generate CSS files " + (new Date()).toString());
    gulp.src('src/sass/**/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer("last 2 version","safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("src/css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('src/css'));
    gulp.src(['src/css/normalize.css',
      'src/css/foundation.min.css',
      'src/css/main.min.css' ])
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('themes/main/static/css'))
    .pipe(notify({ message: 'Sass task complete' }));
});

// Minify JS
gulp.task('js', function() {
  log("Minify JS files " + (new Date()).toString());
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('src/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('themes/main/static/js'))
    .pipe(notify({ message: 'JS Minify task complete' }));
});

// Clean
gulp.task('clean', function(cb) {
    del(['themes/main/static/css', 'themes/main/static/js'], cb)
});

// Default
gulp.task('default', ['clean'], function() {
    gulp.start('sass', 'js');
});

// WATCH
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/sass/**/*.scss', ['sass']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['js']);

});
