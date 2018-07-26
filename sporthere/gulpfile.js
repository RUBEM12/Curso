
var gulp = require("gulp"); //acha o gulp
var minificar= require("gulp-csso");

gulp.task("fnMinificar", function() {
    return gulp.src('css/*.css')
    .pipe(minificar())
    .pipe(gulp.dest("dist/css"))
});
