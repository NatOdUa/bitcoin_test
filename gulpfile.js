'use strict';

var gulp = require('gulp');
var util = require('gulp-util');

// CSS
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

// JS
var uglify = require('gulp-uglify');

// HTML
var htmlclean = require('gulp-htmlclean');
var fileinclude = require('gulp-file-include');

// Common
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// Dev Tool
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var config = {
    isProduction: !(!util.env.production),
    src: {
        html: 'src/*.html',
        ajaxHtml: 'src/ajaxHtml/*.*',
        js: [
            // Vendor
            'vendor/jquery/dist/jquery.js',
            'vendor/popper.js/dist/umd/popper.min.js',
            'vendor/bootstrap/dist/js/bootstrap.min.js',
            'vendor/bootstrap/js/dropdown.js',
            'vendor/bootstrap/js/modal.js',
            'vendor/bootstrap/js/transition.js',
            'vendor/bootstrap/js/tooltip.js',
            'vendor/bootstrap/js/tab.js',
            'vendor/js-cookie/src/js.cookie.js',
            'vendor/EasyAutocomplete/dist/jquery.easy-autocomplete.js',
            'vendor/owl.carousel/dist/owl.carousel.js',
            'vendor/timezz/dist/TimezZ-es6.js',
            'vendor/ion.rangeSlider/js/ion.rangeSlider.js',            
            'vendor/wow/dist/wow.js',
            // Libs
            'src/libs/jquery_mousewheel/jquery.mousewheel.js',
            // Other
            'src/js/partials/_header.js',
            'src/js/partials/_needLess.js',
            // 'src/js/partials/_easyRow.js',
            'src/js/partials/_goToAnchor.js',
            'src/js/partials/common.js',
            'src/js/*.js',
            'src/blocks/**/js/*.js'
        ],
        scss: [
            'src/scss/fonts.scss',
     		'vendor/bootstrap/dist/css/bootstrap.min.css',
            'vendor/bootstrap/dist/css/bootstrap-reboot.min.css',
            'vendor/normalize-scss/normalize.css',
            'vendor/normalize-scss/_normalize.scss',
            'vendor/bootstrap/scss/_modal.scss',
            'vendor/jquery-ui/themes/smoothness/jquery-ui.css',
            'vendor/font-awesome/css/font-awesome.css',
            'vendor/EasyAutocomplete/dist/easy-autocomplete.css',
            'vendor/Ion.RangeSlider/css/Ion.RangeSlider.css',
            'vendor/Ion.RangeSlider/css/Ion.RangeSlider.skinHTML5.css',
            'vendor/animate.css/animate.css',
            'vendor/animate.css/source/fading_entrances/fadeInUp.css',
            'src/libs/easy_autocomplete/easyAutocomplete.css',
            'vendor/owl.carousel/dist/assets/owl.carousel.css',
            'vendor/owl.carousel/dist/assets/owl.theme.default.css',
            'src/scss/partials/common.scss',
            'src/blocks/**/*.scss'
        ],
        img: [
            'src/blocks/button/images/*.+(png|jpg|gif|svg)',
            'src/blocks/logo/images/*.+(png|jpg|gif|svg)', 
            'src/blocks/menu/images/*.+(png|jpg|gif|svg)', 
            'src/blocks/topSection/images/*.+(png|jpg|gif|svg)',
            'src/blocks/form/images/*.+(png|jpg|gif|svg)',
            'src/blocks/newsItem/images/*.+(png|jpg|gif|svg)',
            'src/blocks/payment/images/*.+(png|jpg|gif|svg)',
            'src/blocks/preloader/images/*.+(png|jpg|gif|svg)',            
            'src/blocks/dropdown/images/*.+(png|jpg|gif|svg)'
        ],
        fonts: [
            'src/fonts/*.ttf',
            'vendor/font-awesome/fonts/*.*'
        ]
    },
    modules: {
        sass: {
            errLogToConsole: true
        },
        cleanCSS: {
            compatibility: 'ie9',
            level: {
                1: {
                    specialComments: 0
                }
            }
        },
        fileInclude: {
            prefix: '@@',
            basepath: '@file',
            indent: true
        }

    },
    watchPaths: {
        html: [
            'src/*.html',
            'src/blocks/**/*.html',
            'src/ajaxHtml/*.html'
        ],
        js: [
            'src/js/**/*.js',
            'src/libs/**/*.js',
            'src/blocks/**/js/*.js'
        ],
        scss: [
            'src/scss/**/*.scss',
            'src/plugins/**/*.scss',
            'src/plugins/**/*.sass',
            'src/blocks/**/scss/*.scss'
        ],
        img: [
            'src/images/**/*.*',
            'src/blocks/**/images/*.*'
            
        ],
        fonts: 'src/fonts/*.*'
    },
    buildDevPaths: {
        html: 'build_dev/',
        ajaxHtml: 'build_dev/ajaxHtml',
        js: 'build_dev/js/',
        jsFile: 'main.js',
        css: 'build_dev/css/',
        cssFile: 'main.css',
        img: 'build_dev/images',
        fonts: 'build_dev/fonts/'
    },
    buildPaths: {
        html: 'build/',
        ajaxHtml: 'build/ajaxHtml',
        js: 'build/js/',
        jsFile: 'main.js',
        css: 'build/css/',
        cssFile: 'main.css',
        img: 'build/images',
        fonts: 'build/fonts/'
    }
};

util.log('Build ' + (config.isProduction ? 'PRODUCTION' : 'DEVELOPMENT') + ' version.');

var destinationPath = config.isProduction
    ? config.buildPaths
    : config.buildDevPaths;

/**
 * TASKS
 */

gulp.task('build:html', function () {
    gulp.src(config.src.html)
        .pipe(
            fileinclude(config.modules.fileInclude)
        )
        .pipe(
            htmlclean()
        )
        .pipe(
            gulp.dest(destinationPath.html)
        );
});

gulp.task('build:ajaxHtml', function () {
    gulp.src(config.src.ajaxHtml)
        .pipe(
            fileinclude(config.modules.fileInclude)
        )
        .pipe(
            htmlclean()
        )
        .pipe(
            gulp.dest(destinationPath.ajaxHtml)
        );
});

gulp.task('build:js', function () {
    gulp.src(config.src.js)
        .pipe(
            config.isProduction
                ? util.noop()
                : sourcemaps.init()
        )
        .pipe(
            concat(destinationPath.jsFile)
        )
        .pipe(
            config.isProduction
                ? util.noop()
                : sourcemaps.write({sourceRoot: '/source_js'})
        )
        .pipe(
            uglify()
        )
        .pipe(
            gulp.dest(destinationPath.js)
        );
});

gulp.task('build:scss', function () {
    gulp.src(config.src.scss)
        .pipe(
            sass(config.modules.sass)
        )
        .pipe(
            autoprefixer()
        )
        .pipe(
            config.isProduction
                ? util.noop()
                : sourcemaps.init()
        )
        .pipe(
            concat(destinationPath.cssFile)
        )
        .pipe(
            config.isProduction
                ? util.noop()
                : sourcemaps.write({sourceRoot: '/source_css'})
        )
        .pipe(
            config.isProduction
                ? cleanCSS(config.modules.cleanCSS)
                : util.noop()
        )
        .pipe(
            gulp.dest(destinationPath.css)
        )
        .pipe(
            config.isProduction
                ? util.noop()
                : browserSync.stream()
        );
});

gulp.task('build:image', function () {
    gulp.src(config.src.img)
        .pipe(
            gulp.dest(destinationPath.img)
        )
        .pipe(
            config.isProduction
                ? util.noop()
                : browserSync.stream()
        );
});

gulp.task('build:fonts', function () {
    gulp.src(config.src.fonts)
        .pipe(
            gulp.dest(destinationPath.fonts)
        )
});


/**
 * Main tasks
 */

gulp.task('build', [
    'build:html',
    'build:ajaxHtml',
    'build:js',
    'build:scss',
    'build:fonts',
    'build:image'
]);

gulp.task('default', function () {



    gulp.start('build');

    browserSync.init({
        server: {
            baseDir: config.buildDevPaths.html
        },
        open: false,
        tunnel: false,
        host: 'localhost',
        port: 9000,
        logPrefix: 'bitcoin_test'
    });

    watch(
        config.watchPaths.scss,
        function () {
            gulp.start('build:scss');
        }
    );

    watch(
        config.watchPaths.img,
        function () {
            gulp.start('build:image');
        }
    );

    watch(
        config.watchPaths.html,
        function () {
            gulp.start(['build:html', 'build:ajaxHtml'])
        }
    ).on('change', browserSync.reload);

    watch(
        config.watchPaths.js,
        function () {
            gulp.start('build:js')
        }
    ).on('change', browserSync.reload);

    watch(
        config.watchPaths.fonts,
        function () {
            gulp.start('build:fonts')
        }
    ).on('change', browserSync.reload);
});