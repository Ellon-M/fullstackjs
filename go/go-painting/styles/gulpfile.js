const { src, watch, dest, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//buildstyles fn
const buildStyles = () => {
    return src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(dest('css/'));
}

const watchTask = () => {
    watch(['sass/**/*.scss', 'custom-sass/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask)