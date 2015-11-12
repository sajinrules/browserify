/* gulpfile.js */
 
// Load some modules which are installed through NPM.
var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var source = require('vinyl-source-stream');
//var server = require('gulp-server-livereload');
//var livereload = require('gulp-livereload');
var browserSync = require("browser-sync").create();

// gulp.task('browserify',function(){
//     browserify('./src/js/main.js')
//     .transform('reactify')
//     .bundle()
//     .pipe(source('bundled.js'))
//     .pipe(gulp.dest('./dist/js'))
// });

// gulp.task('copy',function(){
//     gulp.src('src/index.html')
//         .pipe(gulp.dest('dist'));
//     gulp.src('src/assets/**/*.*')
//         .pipe(gulp.dest('dist'));    
// });


 
/*gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(server({
      livereload: true,
      defaultFile:'index.html',
      open: false
    }));
});*/

//gulp.task('watch', ['browserify','copy'], browserSync.reload);

// gulp.task('serve',['browserify','copy'],function() {

//     browserSync.init({
//         server: "./dist"
//     });

    
//     gulp.watch('src/**/*.*',['browserify','copy','watch']);
// });

// gulp.task('default',['browserify','copy','serve'],function(){
//     //livereload.listen();
//     //return gulp.watch('src/**/*.*',['browserify','copy','serve']);
//})

// var gulp        = require('gulp');
// var browserSync = require('browser-sync').create();
// var reload      = browserSync.reload;

// // Save a reference to the `reload` method

// // Watch scss AND html files, doing different things with each.
// gulp.task('serve', function () {

//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./dist"
//         }
//     });

//     gulp.watch("src/**/*.*").on("change", browserSync.reload);
//});

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
//console.log("browserSync:",browserSync);
//process JS files and return the stream.
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

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['browserify','copy'], browserSync.reload('./index.html'));

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['browserify','copy'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/**/*.*", ['js-watch']);
});