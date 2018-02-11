var gulp = require('gulp'),
watch = require('gulp-watch'),
sync = require('browser-sync').create();

gulp.task('watch', function() {

  sync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  })

  watch('./app/index.html', function() {
    sync.reload();
  });
  
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');;
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(sync.stream());
});