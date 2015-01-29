var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var autoprefix = require('gulp-autoprefixer');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');


var sassDir = 'app/assets/sass/*.sass';
var targetCssDir = 'public/assets/css/*.css';

var coffeeDir = 'app/assets/coffee/*.coffee';
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

gulp.task('sass', function()
{
	return sass(sassDir)
			.pipe(gulp.dest(targetCssDir))
			.pipe(livereload());
});

gulp.task('watch', function()
{
	var server = livereload();

	gulp.watch(targetJsDir,['min-js']);
	gulp.watch(targetCssDir,['min-css']);
	gulp.watch(sassDir,['sass']);
});



gulp.task('default', ['sass','min-js','min-css','watch']);