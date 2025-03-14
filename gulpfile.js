const gulp = require('gulp'); 
const concat = require('gulp-concat-css');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create(); 

function html() {
    return gulp.src('src/**/*.html')
                .pipe(plumber())
                    .pipe(gulp.dest('dist/'))
}
  

function css() {
    return gulp.src('src/blocks/**/*.css')
          .pipe(plumber())
          .pipe(concat('bundle.css'))
                  .pipe(gulp.dest('dist/'))
}
  


function images() {
    return gulp.src('src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}')
              .pipe(gulp.dest('dist/images'))
}
  

function fonts() {
    return gulp.src('src/fonts/**/*{woff2,css}')
            .pipe(plumber())
            .pipe(gulp.dest('dist/fonts'))
}





function clear() {
    return del('dist');
}

const all = gulp.series(clear, gulp.parallel(html, css, images, fonts));




exports.html = html;
exports.css = css;
exports.images = images;
exports.fonts = fonts;
exports.clear = clear;
exports.all = all;