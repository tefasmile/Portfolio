var gulp = require('gulp');
var jade = require('gulp-jade');
/*var uglify = require('gulp-uglifyjs');*/

gulp.task('templates', function(){
	gulp.src('jade/index.jade')
	.pipe(jade())
	.pipe(gulp.dest('index.html'))
});	

	
/*Tarea de minificar*/
	/*gulp.task('minificar', function(){
		return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('vendor'));
	});*/
