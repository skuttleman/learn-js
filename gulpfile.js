const execSync = require('child_process').execSync;
const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

const testError = exit => function(err) {
  if (err.name && err.message && err.codeFrame) {
    console.error(err.name + ':', err.message);
    console.error(err.codeFrame, '\n');
  } else {
    console.log('An error occurred', err);
  }
  if (exit) process.exit(1);
  this.emit('end');
};

const test = exit => () => {
  return gulp.src('spec/**/*.js')
    .pipe(jasmine().on('error', testError(exit)));
};

gulp.task('test:continue', test());

gulp.task('test', test(true));

gulp.task('test:watch', ['test:continue'], () => {
  return gulp.watch(['spec/**/*.js', 'src/**/*.js'], test());
});

gulp.task('default', ['test']);
