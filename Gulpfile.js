var gulp = require('gulp')
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

gulp.task("compress", function () {
  return gulp.src('iframe-resize.js')
    .pipe(uglify({ preserveComments: 'some'}))
    .pipe(concat('iframe-resize.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['compress']);

