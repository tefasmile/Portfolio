var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');

/*Compilando de jade a html*/
gulp.task('jade', function () {
    return gulp.src('jade/*.jade')
	 .pipe(jade({
	     pretty: true
	 }))
	 .pipe(gulp.dest('./'))
});
gulp.task('watch:jade', function () {
  gulp.watch('jade/*.jade', ['jade']);
});


/*Compilando de sass a css*/
gulp.task('sass', function (){
	return gulp.src('sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

gulp.task('watch:sass', function () {
  gulp.watch('sass/*.scss', ['sass']);
});

/*Ejecuta todas las tareas de sass y jade en una sola*/
gulp.task('all', ['sass', 'jade']);
gulp.task('all', function () {
	gulp.start('watch:jade');
	gulp.start('watch:sass');
});