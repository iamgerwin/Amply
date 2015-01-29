var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var autoprefix = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

var sassDir = 'app/assets/sass';
var targetCssDir = 'public/assets/css/*.css';

var coffeeDir = 'app/assets/coffee';
var targetJsDir = 'public/assets/js/*.js';

var distDir = 'public/dist';

gulp.task('min-js', function()
{
	gulp.src(targetJsDir)
		.pipe(uglify())
		.pipe(gulp.dest(distDir));
});

gulp.task('min-css', function()
{
	gulp.src(targetCssDir)
		.pipe(minifyCSS({keepBreaks:true}))
		.pipe(gulp.dest(distDir));
});

gulp.task('watch', function()
{
	gulp.watch(targetJsDir,['min-js']);
});



gulp.task('default', ['min-js','min-css']);