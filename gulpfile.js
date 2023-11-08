const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const rename = require('gulp-rename');

function css() {
    return gulp.src('src/style/*.css')
        .pipe(postcss([
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
        ]))
        .pipe(rename({ extname: '.css' }))
        .pipe(gulp.dest('assets/'));
}

// Watch for changes in CSS, sections, and snippets
function watchFiles() {
    gulp.watch('src/style/**/*.css', css);
    gulp.watch(['sections/**/*.liquid', 'snippets/**/*.liquid', 'layout/theme.liquid'], css);
}

// Default task
exports.default = gulp.series(css, watchFiles);