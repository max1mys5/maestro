var gulp = require('gulp'),
	connect = require('gulp-connect'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	minify = require('gulp-minify'),
	concat = require('gulp-concat');

	var startFolder = 'src/',
		finishFolder = 'dist/';


gulp.task('connect', function() {
	connect.server({
		root: finishFolder,
		port: process.env.PORT || 8080,
		livereload: true,
		livereloadPort: 3000
	});
});

gulp.task('html',function() {
	gulp.src(startFolder + '/**/**/**.html')
		.pipe(gulp.dest(finishFolder))
		.pipe(connect.reload());
});

gulp.task('fonts',function() {
	gulp.src(startFolder + '/fonts/**.*')
		.pipe(gulp.dest(finishFolder + 'fonts'))
		.pipe(connect.reload());
});


gulp.task('sass', ['bower_styles','images'], function() {
	return gulp.src(startFolder + 'css/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 20 versions'],
			cascade: false
		}))
		.pipe(concat('style.css'))
		// .pipe(minifyCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(finishFolder + 'css/'))
		.pipe(connect.reload());
});
gulp.task('bower_styles', function() {
	gulp.src([
	"bower_components/components-font-awesome/css/font-awesome.min.css",
"bower_components/bootstrap-css/css/bootstrap.css",
"bower_components/",
"bower_components/font-awesome/css/font-awesome.css",
"bower_components/angular-toastr/dist/angular-toastr.css"



			])
		.pipe(concat('bower_components.css'))
		.pipe(minifyCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(finishFolder + 'css/'));
});
//   gulp.task('fonts', function () {
//    gulp.src(startFolder +'bower_components/components-font-awesome/fonts/' )
// 		.pipe(gulp.dest(finishFolder + 'fonts/'));
// });


 gulp.task('images', function () {
   gulp.src(startFolder + 'img/**/*')
		.pipe(gulp.dest(finishFolder + 'img/'));
});


gulp.task('js', function() {
	gulp.src([
			startFolder + '**/**/**/**/**.module.js',
			startFolder + '**/**/**/**/**.routing.js',
			startFolder + '**/**/**/**/**.config.js',
			startFolder + '**/**/**/**/**.service.js',
			// startFolder + '**/**/**/**/feedback.controller.js',
			// startFolder + '**/**/**/**/slider.controller.js',
			// startFolder + '**/**/**/**/galery.controller.js',
			startFolder + '**/**/**/**/**.controller.js',
			startFolder + '**/**/**/**/**.js'


		])
		.pipe(concat('app.js'))
		// .pipe(minify())
		// .pipe(uglify())
		.pipe(gulp.dest(finishFolder + 'js/'))
		.pipe(connect.reload());

	gulp.src([
			'./bower_components/angular/angular.js',
			'./bower_components/angular-bootstrap/ui-bootstrap.js',
			'./bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'./bower_components/angular-jquery/dist/angular-jquery.js',
			'./bower_components/angular-ui-router/release/angular-ui-router.js',
			'./bower_components/angular-modal-service/dst/angular-modal-service.js',
			'./bower_components/angular-toastr/dist/angular-toastr.tpls.js'


			])
		.pipe(concat('bower_components.js'))
		// .pipe(minify())
		// .pipe(uglify())
		.pipe(gulp.dest(finishFolder + 'js'));
});

gulp.task('watch', function() {
	gulp.watch(startFolder + '**.html', ['html']);
	gulp.watch(startFolder + '**/**/**/**/**.js', ['js']);
	gulp.watch(startFolder + 'css/**/**.*', ['sass']);
});

gulp.task('build', ['html', 'sass', 'js', 'fonts'], function() {

});
gulp.task('default', ['connect', 'watch', 'build']);