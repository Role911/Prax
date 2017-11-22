var gulp = require('gulp'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
connect = require('gulp-connect'),
notify = require("gulp-notify"),
filter = require('gulp-filter'),
cleanCSS = require('gulp-clean-css'),
bulkSass = require('gulp-sass-bulk-import'),
mainBowerFiles = require('main-bower-files'),
sourcemaps = require('gulp-sourcemaps'),
ngAnnotate = require('gulp-ng-annotate'),
ngHtml2Js = require("gulp-ng-html2js"),
path = require('path');

var dest = 'public/';
var src = 'src';
var templates = src + '/templates.js';
var modules = src + '/app/**/*.module.js';
var scripts = src + '/app/**/*.js';
var sassFiles = src + '/sass/praxhub-admin.scss';
var sassWatch = src + '/sass/**/*.scss';
var html = src + '/app/**/*.html';

gulp.task('default', ['app-scripts', 'sass-files', 'html2js', 'watch', 'connect']);

gulp.task('bower-scripts', function () {
return gulp.src(mainBowerFiles())
    .pipe(sourcemaps.init())
    .pipe(filter(['**/*.js', '!**/bootstrap.js']))
    .pipe(ngAnnotate())
    .pipe(concat('app.components.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest + 'js'))
    .pipe(notify("bower-scripts task done!"));
});

gulp.task('sass-files', function () {
return gulp.src(sassFiles)
    .pipe(sass())
    .pipe(bulkSass())
    .pipe(concat('app.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS())
    .pipe(gulp.dest(dest + 'css'))
    .pipe(notify("sass-files task done!"))
    .pipe(connect.reload());
});

gulp.task('app-scripts', function () {
return gulp.src([modules, scripts, templates])
    .pipe(sourcemaps.init())
    .pipe(filter('**/*.js'))
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest + 'js'))
    .pipe(notify("app-scripts task done!"))
    .pipe(connect.reload());
});

gulp.task('html2js', function() {
return gulp.src(html)
    .pipe(ngHtml2Js({
        moduleName: 'templates',
        rename: function(templateUrl, templateFile) {
            return templateUrl.replace(path.dirname(templateUrl), '.');
        }
    }))
    .pipe(concat("templates.js"))
    .pipe(gulp.dest("src"));
})

gulp.task('connect', function () {
connect.server({
    root: 'public',
    proxy: 'localhost',
    port: 9000,
    fallback: 'public/index.html',
    livereload: true
});
});

gulp.task('watch', function() {
gulp.watch([modules, scripts, html], ['app-scripts', 'html2js']);
gulp.watch([sassWatch], ['sass-files']);
});