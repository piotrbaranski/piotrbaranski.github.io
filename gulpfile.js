const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');

gulp.task('copyHtml', function() {
    gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('imageMin', () =>
gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

gulp.task('minifyScripts', function() {
    return gulp.src('src/scripts.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minifyTyped', function() {
    return gulp.src('src/typed.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minifyCss', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['imageMin', 'minifyScripts','minifyTyped', 'minifyCss', 'copyHtml']);