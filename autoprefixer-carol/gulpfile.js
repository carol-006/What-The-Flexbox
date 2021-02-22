var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

//旧的，有问题的。下边是正确的
// gulp.task('styles',function() {
//     gulp.src('css/styles.css')
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('build'))
// });

//autoprefixer
gulp.task('styles', function () {
    return gulp.src('css/styles.css')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build'))
});

//这个任务有问题
gulp.task('watch',function(){
    gulp.watch('css/styles.css', ['styles']);
})