/* gulpfile.js */
 
// Load some modules which are installed through NPM.
var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('./src/js/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('bundled.js'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('copy',function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist'));    
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/**/*.*',['browserify','copy']);
})