var gulp = require("gulp");
var watch = require('gulp-watch');

gulp.task("default", () => {
  console.log("hooray crreated a gulp task");
});

gulp.task("html", ()=>{
  console.log("Imagine something useful being done to our html done here!!")
});

gulp.task("styles", ()=>{
  console.log("Imagine Sass or PostCss tasks running here!!")
});

gulp.task('watch', ()=>{
  watch('./app/index.html',()=>{
    gulp.start('html');
  });
  watch('./app/assets/css/**/*.css',()=>{
    gulp.start('styles');
  });

})
