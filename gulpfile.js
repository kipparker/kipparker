var gulp = require('gulp');  
var browserify = require('gulp-browserify');  
var concat = require('gulp-concat');  
var less = require('gulp-less');  
var refresh = require('gulp-livereload');  
var lr = require('tiny-lr');  
var server = lr();

gulp.task('styles', function() {  
    gulp.src(['./media/less/style.less'])
        .pipe(less({compress : true}))
        .pipe(gulp.dest('./media/css'))
})


gulp.task('default', function() {  
    gulp.run('styles')
    gulp.watch('./media/less/*.less', ['styles']);
})

