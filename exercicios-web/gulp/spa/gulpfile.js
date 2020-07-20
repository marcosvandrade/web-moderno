const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS,  depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos,  servidor } = require('./gulpTasks/servidor')

module.exports.default = series (
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)

// const util = require('gulp-util')
// const sequence = require('run-sequence')

// require('./gulpTasks/app')
// require('./gulpTasks/deps')
// require('./gulpTasks/servidor')

// gulp.task('default', () => {
//     if(util.env.production) {
//         sequence('deps', 'app')
//         // gulp.start('deps', 'app')
//     } else {
//         sequence('deps', 'app', 'servidor')
//         // gulp.start('deps', 'app', 'servidor')
//     }
// })