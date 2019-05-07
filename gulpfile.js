const gulp = require("gulp");
//const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');


gulp.task("build", function () {
    return browserify({
        //basedir: '.',
        debug: true,
        entries: [
            'ts/app.ts',
        ],
        cache: {},
        packageCache: {}
    })
        .on('error', gutil.log)
        .plugin(tsify)
        .on('error', gutil.log)
        .bundle()
        .on('error', gutil.log)
        .pipe(source('app.js'))
        .on('error', gutil.log)
        //.pipe(buffer())
        //.pipe(uglify())
        .pipe(gulp.dest("app/js/"));
});

gulp.task('default', ['build'], function(){
	gulp.watch(['ts/**/*.ts', 'ts/*.ts'], ['build']);
});