const { watch,series, parallel, task, dest } = require('gulp');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');


let rootDir = './src/client/';
let outDir = './dist/public/';


task('tScriptToWeb', function () {
  return browserify({
    basedir: '.',
    debug: true,
    entries: [rootDir + 'typescript/temibroad/temibroad.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.ts']
    })
    .bundle()
    .on('error', function (err) {
      // print the error (can replace with gulp-util)
      console.log(err.message);
      // end this stream
      this.emit('end');
    })
    // .pipe(coffee())
    .pipe(source('temibroad.bundle.js'))
    .pipe(buffer())
    // .pipe(uglify({
    //   compress: {
    //     drop_console: true,
    //   },
    // }))
    // 上線記得這段要取消註釋用來混淆
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(outDir + 'javascripts'));
});

task('watch', function(){
  watch([rootDir + 'typescript/temibroad/temibroad.ts'], series('tScriptToWeb'));
});

exports.default = series(parallel('tScriptToWeb'),'watch');