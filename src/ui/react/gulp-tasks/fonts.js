'use strict';

var consolidate = require('gulp-consolidate');
var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var path = require('path');
var rename = require('gulp-rename');

var rootDir = path.join(__dirname, '..', '..', '..', '..');
var reactDir = path.join(rootDir, 'src', 'ui', 'react');
var pkg = require(path.join(rootDir, 'package.json'));

var distFolder = path.join(rootDir, 'dist');
var editorDistFolder = path.join(distFolder, 'alloy-editor');

var fontName = 'alloyeditor';

gulp.task('generate-fonts', function() {
    return gulp.src([path.join(reactDir, 'src/assets/icons/svg/*.svg')])
        .pipe(iconfont({
            fontName: fontName,
            normalize: true
        }))
        .on('glyphs', function(glyphs, options) {
            gulp.src(path.join(reactDir, 'src/assets/font/font-icon-map-template.scss'))
                .pipe(consolidate('lodash', {
                    glyphs: glyphs
                }))
                .pipe(rename({basename: 'font-icon-map'}))
                .pipe(gulp.dest(path.join(reactDir, 'src/assets/sass/font')));
            gulp.src(path.join(reactDir, 'src/assets/font/font-template.css'))
                .pipe(consolidate('lodash', {
                    fontName: fontName,
                    fontPath: 'fonts/',
                    glyphs: glyphs
                }))
                .pipe(rename({basename: 'alloyeditor-font'}))
                .pipe(gulp.dest(path.join(editorDistFolder, 'assets')));
        })
        .pipe(gulp.dest(path.join(editorDistFolder, 'assets/fonts')));
});