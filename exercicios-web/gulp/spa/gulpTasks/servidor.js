const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML') () )
    watch('src/**/*.scss', () => gulp.series('appCSS') () )
    watch('src/**/*.js', () => gulp.series('appJS') () )
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG') () )

    return cb()
}


module.exports = {
    monitorarArquivos,
    servidor
}

// const watch = require('gulp-watch')
// const webserver = require('gulp-webserver')

// gulp.task('monitorarMudancas', () => {
//     watch('src/**/*.html', () => gulp.start('app.html'))
//     watch('src/**/*.scss', () => gulp.start('app.css'))
//     watch('src/**/*.js', () => gulp.start('app.js'))
//     watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
// })

// gulp.task('servidor', ['monitorarMudancas'], () => {
//     return gulp.src('build').pipe(webserver({
//         livereload: true,
//         port: 8081,
//         open: true
//     }))
// })