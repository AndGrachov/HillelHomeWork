const {dest, src, parallel} = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const minify = require('gulp-minify');

function copyHtml(){
    return src('./src/index.html')
    .pipe(dest('./dist/'));
}
function copyCss(){
    return src('./src/style.css')
    .pipe(cssnano())
    .pipe(dest('./dist/'));
}
function copyJs(){
    return src('./src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(minify())
    .pipe(dest('./dist/'));
}

function copyVendors(){
    return src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(concat('vendors.js'))
    .pipe(dest('./dist/'))
}

module.exports.build = parallel(copyHtml,copyCss,copyJs,copyVendors);